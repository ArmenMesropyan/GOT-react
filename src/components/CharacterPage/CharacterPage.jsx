import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CharItem, ItemList} from '../index';
import {GetService} from '../../services';
import './CharacterPage.scss';

export default class CharList extends Component {

    state = {
        currentCharacter: null,
    }

    getService = new GetService();

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
                            <ItemList showItem={this.showCharacter} getData={this.getService.getAllCharacters} renderLabel={({name, gender}) => `${name} (${gender})`}/>
                        </Col>
                        <Col lg="5">
                            <CharItem character={currentCharacter} renderErrorMsg={(<span className="char-list__error">Please select character</span>)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="7" className="char-list__item item-list">
                            <ItemList showItem={this.showCharacter} getData={this.getService.getAllHouses} renderLabel={({name}) => name}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="7" className="char-list__item item-list">
                            <ItemList showItem={this.showCharacter} getData={this.getService.getAllBooks} renderLabel={({name, numberOfPages}) => `${name} ${numberOfPages}`}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}