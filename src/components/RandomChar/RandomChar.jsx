import React, {Component} from 'react';
import {GetCharacter} from '../../services';
import {Spinner} from '../index';
import {Table, Container, Card, CardBody, CardText, CardTitle, Button, Row, Col} from 'reactstrap';
import './RandomChar.scss';

export default class RandomChar extends Component {
    constructor() {
        super()
        this.getCharacter = new GetCharacter();
        this.state = {
            char: {
                name: null,
                gender: null,
                born: null,
                died: null,
                culture: null,
            },
            loading: true,
        };
        this.updateData();
    }

    updateData = async () => {
        try {
            const id = Math.floor(Math.random() * 140 + 25);
            const char = await this.getCharacter.getCharacterById(id);
            this.setState({char, loading: false});
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        const {char: {name, gender, born, died, culture}, loading} = this.state;

        if(loading) return <Container><Spinner /></Container>;

        return (
            <section className="random-character">
                <Container>
                    <Row>
                        <Col md="8" sm="10" xs="12">
                            <Card tag="ul" className="random-character__list">
                                <CardBody tag="li" className="random-character__item">
                                    <CardTitle tag="h3" className="random-character__title">
                                        Random Character - {name}
                                    </CardTitle>
                                    <CardText tag="div" className="random-character__table">
                                        <Table>
                                            <thead className="visually-hidden">
                                            <tr>
                                                <th>{name}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Gender</th>
                                                    <td>{gender}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Born</th>
                                                    <td>{born}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Died</th>
                                                    <td>{died}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Culture</th>
                                                    <td>{culture}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardText>
                                    <Button onClick={this.updateData}>Get Random Character</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};