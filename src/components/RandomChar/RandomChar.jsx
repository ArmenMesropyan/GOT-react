import React, {Component} from 'react';
import {GetCharacter} from '../../services';
import {Spinner, ErrorMsg} from '../index';
import {Table, Container, Card, CardBody, CardText, CardTitle, Button, Row, Col} from 'reactstrap';
import './RandomChar.scss';

const View = ({char: {name, gender, born, died, culture}}) => (
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
        <Button>Get Random Character</Button>
    </CardBody>
)

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
            error: false,
        };
        this.updateData();
    }

    onError() {
        this.setState({error: true, loading: false});
    }

    updateData = async () => {
        try {
            const id = Math.floor(Math.random() * 140 + 25);
            const char = await this.getCharacter.getCharacterById(id);
            this.setState({char, loading: false});
        } catch (error) {
            this.onError();
        }
    }
    
    render() {
        const {char, loading, error} = this.state;

        const errorTemplate = error ? <ErrorMsg /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <section className="random-character">
                <Container>
                    <Row>
                        <Col lg="7" md="10" sm="11" xs="12">
                            <Card tag="ul" className="random-character__list">
                                {errorTemplate}
                                {spinner}
                                {content}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
};