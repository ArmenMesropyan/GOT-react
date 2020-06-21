import React, {Component} from 'react';
import {Table, Container, Row, Col} from 'reactstrap';
import {Spinner, CharItem} from '../index';
import {GetCharacter} from '../../services';
import './CharList.scss';

export default class CharList extends Component {

    state = {
        characters: null,
        currentCharacter: null,
    }

    getCharacter = new GetCharacter();

    async updateCharacters() {
        try {
            const characters = await this.getCharacter.getAllCharacters();
            this.setState({characters});
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.updateCharacters();
    }

    showCharacter(currentCharacter) {
        this.setState({currentCharacter});
    }

    getCharactersHTML(arr) {
        return arr.map((char, i) => (
            <tr key={i}>
                <td onClick={() => this.showCharacter(char)}>{char.name}</td>
            </tr>
        ))
    }

    render() {
        const {characters, currentCharacter} = this.state;
        if(!characters) return <Spinner />

        const elements = this.getCharactersHTML(characters);

        return (
            <section className="char-list">
                <h2 className="visually-hidden">Characters List</h2>
                <Container>
                    <Row>
                        <Col lg="7">
                            <Table className="char-list__characters">
                                <thead className="visually-hidden">
                                <tr>
                                    <th>Characters List</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg="5">
                            <CharItem character={currentCharacter}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}