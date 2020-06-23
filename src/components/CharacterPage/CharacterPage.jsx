import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CharItem, ItemList} from '../index';
import {GetService} from '../../services';
import './CharacterPage.scss';

const RowBlock = ({left, right}) => (
    <Row>
        <Col lg="7" className="char-list__item item-list">
            {left}
        </Col>
        <Col lg="5">
            {right}
        </Col>
    </Row>
);

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
        const itemList = (
            <ItemList showItem={this.showCharacter} 
                      getData={this.getService.getAllCharacters}
                      renderLabel={({name, gender}) => `${name} (${gender})`}/>
        );

        const charItem = (
            <CharItem character={currentCharacter}
                      renderErrorMsg={
                          (<span className="char-list__error">Please select character</span>)
                      }/>
        );

        return (
            <section className="char-list">
                <h2 className="visually-hidden">Characters List</h2>
                <Container>
                    <RowBlock left={itemList} right={charItem}/>
                </Container>
            </section>
        )
    }
}