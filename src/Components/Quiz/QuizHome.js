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
    const [correctAnswer, setCorrectAnswer] = useState(0);
    let correctAnswerVar = 0;
    let rightAnswer = [];
    useEffect(() => {
        fetch('quiz.json')
            .then(res => res.json())
            .then(data => setQuizes(data))
    }, []);
    // useEffect(() => {

    // });
    quizes.forEach((quiz) => (
        rightAnswer?.push(quiz.right_answer)
    ))
    // console.log(rightAnswer);
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
    console.log(correctAnswer);
    const checkAnswer = (e) => {
        if (e.target.value === quizes[activeStep].right_answer) {
            correctAnswerVar = correctAnswer + 1;
            setCorrectAnswer(correctAnswerVar)

        } else if (correctAnswer > 0) {
            correctAnswerVar = correctAnswer - 1;
            setCorrectAnswer(correctAnswerVar)
        }
        // console.log(e.target.value);
        // console.log(quizes[activeStep].right_answer);
        if (e.target.checked) {
            setSelected(true);
        }
        else {
            setSelected(false);
        }
        // if (e.target.value === ) { }
        // else { }
    }
    return (
        <Box>
            <Container>
                <Typography variant='h3' sx={{ textAlign: 'center' }}>Free Quizes!</Typography>
                <br /> <br />
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
                </Box>

            </Container>
        </Box>
    );
};

export default QuizHome;