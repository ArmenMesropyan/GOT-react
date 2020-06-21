import React, {Component} from 'react';
import {GetCharacter} from '../../services';
import {Spinner, ErrorMsg} from '../index';
import {Table, Container, Card, CardBody, CardText, CardTitle, Row, Col} from 'reactstrap';
import './RandomChar.scss';

const View = ({char: {name, gender, born, died, culture}} = {}) => (
    <CardBody tag="li" className="random-character__item">
        <CardTitle tag="h3" className="random-character__title">
            Random Character - {name || 'no data.'}
        </CardTitle>
        <CardText tag="div" className="random-character__table">
            <Table>
                <thead className="visually-hidden">
                <tr>
                    <th>{name || 'no data.'}</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Gender</th>
                        <td>{gender || 'no data.'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Born</th>
                        <td>{born || 'no data.'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Died</th>
                        <td>{died || 'no data.'}</td>
                    </tr>
                    <tr>
                        <th scope="row">Culture</th>
                        <td>{culture || 'no data.'}</td>
                    </tr>
                </tbody>
            </Table>
        </CardText>
    </CardBody>
)

export default class RandomChar extends Component {

    getCharacter = new GetCharacter();

    state = {
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

    componentDidMount() {
        this.updateData();
        this.timerId = setInterval(this.updateData, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
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
                <h2 className="visually-hidden">Random Character</h2>
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