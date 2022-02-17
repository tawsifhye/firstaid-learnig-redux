import { useTheme } from '@mui/material/styles';
import { Button, Container, FormControl, FormControlLabel, Grid, MobileStepper, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CourseCard from '../Home/CourseCard';

const QuizHome = () => {
    const [quizes, setQuizes] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [filterCourse, setFilterCourse] = useState([]);
    const [selected, setSelected] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [level, setLevel] = useState('');

    let beginner = 0;
    let intermediate = 0;
    let advanced = 0;
    let rightAnswer = [];
    // let selectedAnswer = [];

    useEffect(() => {
        fetch('courselist.json')
            .then(res => res.json())
            .then(data => setCourseList(data));
    }, [correctAnswer])
    console.log(courseList);
    useEffect(() => {
        const filterLevel = courseList.filter((element) => (
            element.level == level
        ));
        setFilterCourse(filterLevel)
    }, [correctAnswer, level])

    // console.log(filterCourse);

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
                rightAnswer: quiz?.right_answer,
                level: quiz?.level
            }
        )
    ))


    useEffect(() => {
        for (let i = 0; i < correctAnswer.length; i++) {
            correctAnswer[i].forEach((element) => {
                if (element.level == 'beginner') {
                    beginner++;
                }
                else if (element.level == 'intermediate') {
                    intermediate++;
                }
                else {
                    advanced++;
                }
            })
        }
        if (beginner > intermediate || beginner > advanced) {
            setLevel('beginner')
        }
        else if (intermediate > beginner || intermediate > advanced) {
            setLevel('intermediate')
        }
        else if (advanced > beginner || advanced > intermediate) {
            setLevel('advanced');
        }
        console.log('User Level', level);
    }, [correctAnswer, level])


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
            selectedAnswer: e.target.value,
            level: quizes[activeStep].level
        }
        const newArr = [...selectedAnswer, answer];
        setSelectedAnswer(newArr);
    }

    const handleSubmit = () => {
        const findCorrect = selectedAnswer.map(a => (rightAnswer.filter(x => (a.id == x.id && a.selectedAnswer == x.rightAnswer))))
        // console.log('Correct answers', findCorrect);
        const getSelected = rightAnswer.map(a => (selectedAnswer.filter(x => (a.id == x.id && a.selectedAnswer == x.rightAnswer))))
        // console.log('selected by user', getSelected);
        const filter = findCorrect.filter(a => (a.length))
        setCorrectAnswer(filter);
        setIsSubmitted(true);
    }
    // console.log('Correct answers', correctAnswer);
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
                    <>
                        <Box>
                            <Paper elevation={3} sx={{ textAlign: 'center' }}>
                                <Typography variant='h4' > Your Correct Answer: {correctAnswer.length}/{quizes.length}</Typography>
                                <br /> <br />
                                <Typography variant='h5' > Suggested Courses</Typography>
                                <Typography variant='h5' > </Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 10 }}>
                                    {filterCourse.map((course) => (
                                        <Grid item xs={2} sm={4} md={4} key={course.id}>
                                            <CourseCard course={course} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Box>
                    </>


                }

            </Container>
        </Box>
    );
};

export default QuizHome;