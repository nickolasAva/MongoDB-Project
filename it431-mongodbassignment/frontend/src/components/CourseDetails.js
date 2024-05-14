//creaet a react all to show the course details for a single course
//the course details will be displayed in a card
//the card will be displayed in a container

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const CourseDetails = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({});
    const { id } = useParams();


    const handleDelete = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/api/course/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(data => {
                navigate('/courses');
            }
            );
    }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/course/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCourse(data)
            }
            );
    }, [id]);

    return (
        <Card>

            <Container>
                <h1>{course.title}</h1>
                <Button onClick={() => navigate(-1)} variant="primary">Back</Button>
                &nbsp;
                <LinkContainer to={`/courses/update/${id}`}>
                    <Button variant="primary">Edit Course</Button>
                </LinkContainer>
                &nbsp;
                <Button onClick={handleDelete} variant="primary">Delete</Button>
                <Row>
                    <Col>

                        <Card className="my-3 p-3 rounded">
                            <Card.Title as="div">
                                <strong>{course.title}</strong>
                            </Card.Title>
                            <Card.Text as="div">
                                <div className="my-3">
                                    {course.description}
                                </div>
                            </Card.Text>
                            <Card.Text as="h3">
                                {course.estimatedTime}
                            </Card.Text>

                        </Card>
                    </Col>
                </Row>

            </Container>


        </Card>
    )
}

export default CourseDetails;

