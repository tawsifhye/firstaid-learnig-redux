import { Box, } from '@mui/system';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import { Container, FormControlLabel, Radio, } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { Link, useNavigate } from 'react-router-dom';


const QuizLayout = () => {
    const navigate = useNavigate();
    const contextData = useContext(DataContext);
    const { state, dispatch } = contextData;
    const { quizzes, finalAnswers } = state;
    const [index, setIndex] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    let userSelectedAnswers = [];

    useEffect(() => {
        setShowQuestion(true);
        selectedAnswer.forEach((element) => {
            if (element.questionId == userSelectedAnswers[userSelectedAnswers.length - 1]?.questionId) {
                userSelectedAnswers.pop();
                userSelectedAnswers.push(element);
            }
            else {

                userSelectedAnswers.push(element);
            }
            dispatch({
                type: 'SUBMIT_QUIZ',
                payload: userSelectedAnswers
            })
        })
    }, [index, isSubmitted, isSelected])


    useEffect(() => {
        fetch('quiz.json')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'LOAD_QUIZ',
                payload: data
            }))
    }, [quizzes.length])

    const goNext = () => {
        setShowQuestion(false)
        setIsSelected(false);
        let currentIndex = index;
        currentIndex += 1;
        setIndex(currentIndex)
    }
    const goBack = () => {
        let currentIndex = index;
        currentIndex -= 1;
        setIndex(currentIndex)
    }
    const handleOnChange = (option) => {
        setIsSelected(true);

        const answer = {
            questionId: quizzes[index].id,
            question: quizzes[index].question,
            options: quizzes[index].options,
            selectedAnswer: option,
            level: quizzes[index].level
        }
        const newArr = [...selectedAnswer, answer];
        setSelectedAnswer(newArr);
    }



    const submitQuiz = () => {
        setIsSubmitted(true);
        navigate('/result');
    }

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            {
                showQuestion &&

                <Card sx={{
                    minWidth: '', p: 2,
                    boxShadow: '-8px 4px 19px 0 rgb(0 0 0 / 12%)',
                    padding: '60px 80px',
                    borderRadius: '20px',
                    mb: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography variant='h6'>{quizzes[index]?.id}. {quizzes[index]?.question}</Typography>
                    <Box>

                        <FormControl sx={{
                            m: 3,
                        }} variant="standard">

                            <RadioGroup >
                                {
                                    quizzes[index]?.options.map(element => (
                                        <FormControlLabel
                                            sx={{
                                                backgroundColor: ' #f4f4f4',
                                                mt: 4,
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                width: '100%',
                                                alignItems: 'center',
                                                borderRadius: '5px',
                                                border: '1px solid #d4d4d4',

                                            }} onChange={() => handleOnChange(element)} key={element.id} value={element.id} control={<Radio />} label={element.option} />
                                    ))
                                }

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box >

                        <Typography sx={{ fontWeight: 600 }}>Question {index + 1}/{quizzes.length}</Typography>

                        <Button onClick={goBack} disabled={index === 0}>Prev</Button>
                        {
                            index === quizzes.length - 1 ?

                                <Button onClick={submitQuiz} disabled={!isSelected} variant='contained'>Submit</Button>

                                :
                                <Button onClick={goNext} disabled={index === quizzes.length - 1 || !isSelected}>Next</Button>

                        }
                    </Box>
                </Card>
            }

        </Container>
    );
};

export default QuizLayout;