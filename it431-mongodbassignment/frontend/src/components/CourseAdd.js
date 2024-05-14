import React, { useState } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CourseAdd = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/api/course/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate('/courses');
            }
            );
    }

    return (
        <Card>
            <Container>
                <h1>Add Course</h1>
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Title"
                                        name="title"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formformDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Description"
                                        name="description"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formEstimatedTime">
                                    <Form.Label>Estimated Time</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Course Time Estimate"
                                        name="estimatedTime"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                            </Form>



                        </Card>
                        <Button onClick={handleSubmit} variant="primary">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="primary">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CourseAdd;