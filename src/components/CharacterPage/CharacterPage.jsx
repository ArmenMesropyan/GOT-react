import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CharItem, ItemList} from '../index';
import {GetCharacter} from '../../services';
import './CharacterPage.scss';

export default class CharList extends Component {

    state = {
        currentCharacter: null,
    }

    getCharacter = new GetCharacter();

    showCharacter = (currentCharacter) => {
        this.setState({currentCharacter});
    }

    render() {
        let {currentCharacter} = this.state;

        return (
            <section className="char-list">
                <h2 className="visually-hidden">Characters List</h2>
                <Container>
                    <Row>
                        <Col lg="7" className="char-list__item item-list">
                            <ItemList showItem={this.showCharacter} getData={this.getCharacter.getAllCharacters}/>
                        </Col>
                        <Col lg="5">
                            <CharItem character={currentCharacter} renderErrorMsg={(<span>Please select character</span>)}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}