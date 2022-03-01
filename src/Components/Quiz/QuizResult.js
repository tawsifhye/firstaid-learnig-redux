import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import CourseCard from '../Home/CourseCard';

const QUizResult = () => {
    const contextData = useContext(DataContext);
    const [correct, setCorrect] = useState(0);
    const [level, setLevel] = useState('');
    const [filteredCourse, setFilteredCourse] = useState([]);
    const { state, dispatch } = contextData;
    const { quizzes, finalAnswers, courses } = state;
    // console.log('courses', courses);
    let beginner = 0;
    let intermediate = 0;
    let advanced = 0;
    let correctAns = 0;
    useEffect(() => {
        finalAnswers.forEach(element => {
            if (element.selectedAnswer.isCorrect) {
                correctAns += 1;
                setCorrect(correctAns);

            }
            if (element.selectedAnswer.isCorrect && element.level === 'beginner') {
                beginner++;
            }
            else if (element.selectedAnswer.isCorrect && element.level === 'intermediate') {
                intermediate++;
            }
            else if (element.selectedAnswer.isCorrect && element.level === 'advanced') {
                advanced++;
            }
        });
        if (beginner > intermediate || beginner > advanced) {
            setLevel('beginner')
        }
        else if (intermediate > beginner || intermediate > advanced) {
            setLevel('intermediate')
        }
        else if (advanced > beginner || advanced > intermediate) {
            setLevel('advanced');
        }
        else {
            setLevel('beginner');
        }
        // console.log('User Level', level);
    }, [finalAnswers, level]);

    useEffect(() => {
        const filterCourse = courses.filter(element => (element.level === level));
        // console.log(filterCourse);
        setFilteredCourse(filterCourse);
    }, [level, courses])
    return (
        <Box sx={{ mb: 4 }}>
            <Typography sx={{ textAlign: 'center' }} variant='h4'>Result</Typography>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h4'> {correct}/{quizzes.length}</Typography>
            </Box>
            <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }} >
                <Box >
                    {
                        finalAnswers.map((answer, index) => (
                            <Box key={answer.questionId}
                                sx={{
                                    borderBottom: '1px solid grey',
                                    '&:last-child':
                                        { borderBottom: 'none' }
                                }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                    {answer.questionId}. {answer.question}
                                </Typography>
                                {answer.options.map(element => (
                                    <Box key={element.id}>
                                        <Typography
                                            sx={{
                                                color: (element.isCorrect && 'green') || (finalAnswers[index].selectedAnswer.id === element.id && 'red'),
                                                fontWeight: ((finalAnswers[index].selectedAnswer.isCorrect) && (finalAnswers[index].selectedAnswer.id === element.id) && 'bold') || (finalAnswers[index].selectedAnswer.id === element.id && 'bold')

                                            }}
                                        >
                                            {element.id}.{element.option}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ))
                    }
                </Box>
                <Link style={{ textDecoration: 'none' }} to='/quiz'> <Button variant='contained'>Retake Quiz</Button> </Link>
            </Container>
            <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
                <Typography variant='h4'>Suggested Course</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {filteredCourse.map((course) => (
                            <Grid item xs={12} sm={12} md={4} key={course.id}>
                                <CourseCard course={course} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default QUizResult;