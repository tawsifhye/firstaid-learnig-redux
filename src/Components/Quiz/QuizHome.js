import { useTheme } from '@mui/material/styles';
import { Button, Checkbox, Container, FormControl, FormControlLabel, MobileStepper, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Styles = {
    optionContainer: {
        backgroundColor: '#f4f4f4',
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        border: '1px solid #d4d4d4',
        margin: '35px 0',
        textAlign: 'left',
        fontSize: '1rem',
        cursor: 'pointer'
    }
}

const QuizHome = () => {
    const [quizes, setQuizes] = useState([]);
    const [selected, setSelected] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    let correctAnswerVar = 0;
    let rightAnswer = [];
    // let selectedAnswer = [];
    useEffect(() => {
        fetch('quiz.json')
            .then(res => res.json())
            .then(data => setQuizes(data))
    }, []);
    // useEffect(() => {

    // });
    quizes.forEach((quiz) => (
        rightAnswer?.push(
            {
                id: quiz?.id,
                rightAnswer: quiz?.right_answer
            }
        )
    ))
    // console.log('rightAnswer', rightAnswer);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = quizes.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (selected) {
            setSelected(false);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const checkAnswer = (e) => {
        setSelected(true);
        const answer = {
            id: activeStep + 1,
            selectedAnswer: e.target.value
        }
        const newArr = [...selectedAnswer, answer];
        setSelectedAnswer(newArr);
    }

    const handleSubmit = () => {
        const findCorrect = selectedAnswer.map(a => (rightAnswer.filter(x => (a.id == x.id && a.selectedAnswer == x.rightAnswer))))
        // console.log('Correct answers', findCorrect);
        const getSelected = rightAnswer.map(a => (selectedAnswer.filter(x => (a.id == x.id && a.selectedAnswer == x.rightAnswer))))
        console.log('selected by user', getSelected);
        // const selectedFinder = getSelected.filter(a => (a[a.length - 1]))
        // console.log(selectedFinder);

        const filter = findCorrect.filter(a => (a.length))
        setCorrectAnswer(filter);
        setIsSubmitted(true);
    }
    console.log('Correct answers', correctAnswer);
    // console.log('selectedAnswer', selectedAnswer);
    return (
        <Box>
            <Container>
                <Typography variant='h3' sx={{ textAlign: 'center' }}>Free Quizes!</Typography>
                <br /> <br />

                {!isSubmitted &&
                    <Box sx={{ width: "100%", flexGrow: 1 }}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >
                            <Typography>{quizes[activeStep]?.question}</Typography>
                        </Paper>
                        <Box sx={{ width: '80%', p: 2 }}>



                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    {quizes[activeStep]?.options.map((answer) => (
                                        <FormControlLabel key={answer.id} value={answer?.id} control={<Radio />} label={answer?.option} onChange={checkAnswer} />
                                    ))}
                                </RadioGroup>
                            </FormControl>


                        </Box>
                        <MobileStepper
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1 || !selected}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                        {
                            activeStep === quizes.length - 1 &&
                            <Button onClick={handleSubmit} variant="contained">Submit</Button>
                        }
                    </Box>
                }
                {
                    isSubmitted &&
                    <Box>
                        <Paper elevation={3} sx={{ textAlign: 'center' }}>
                            <Typography variant='h4' > Your Correct Answer: {correctAnswer.length}/{quizes.length}</Typography>
                            <br /> <br />
                            <Typography variant='h5' > Suggested Courses</Typography>
                        </Paper>
                    </Box>
                }

            </Container>
        </Box>
    );
};

export default QuizHome;