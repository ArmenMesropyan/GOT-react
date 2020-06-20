import React from 'react';
import {Table, Container, Card, CardBody, CardText, CardTitle, Button, Row, Col} from 'reactstrap';
import './RandomChar.scss';

const RandomChar = () => {
    return (
        <section className="random-character">
            <Container>
                <Row>
                    <Col sm="8" xs="12">
                        <Card tag="ul" className="random-character__list">
                            <CardBody tag="li" className="random-character__item">
                                <CardTitle tag="h3" className="random-character__title">
                                    Random Character - John Snow
                                </CardTitle>
                                <CardText tag="div" className="random-character__table">
                                    <Table>
                                        <thead className="visually-hidden">
                                            <tr>
                                                <th>John Snow</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>male</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Born</th>
                                                <td>11.03.1039</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Died</th>
                                                <td>13.09.1089</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Culture</th>
                                                <td>Anarchy</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardText>
                                <Button>Get Random Character</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RandomChar;