import { useTheme } from '@mui/material/styles';
import { Button, Checkbox, Container, MobileStepper, Paper, Typography } from '@mui/material';
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

    useEffect(() => {
        fetch('quiz.json')
            .then(res => res.json())
            .then(data => setQuizes(data))
    }, []);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = quizes.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    console.log(quizes)
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

                        {quizes[activeStep]?.options.map((quiz) => (

                            <Typography sx={Styles.optionContainer}>
                                <Checkbox />
                                {quiz.option}</Typography>
                        ))}

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
                                disabled={activeStep === maxSteps - 1}
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