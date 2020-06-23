import React, {Component} from 'react';
import {ItemDetail, ItemList, Field, RowBlock} from '../../index';
import {GetService} from '../../../services';
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
        const itemList = (
            <ItemList showItem={this.showCharacter} 
                      getData={this.getService.getAllCharacters}
                      renderLabel={({name, gender}) => `${name} (${gender})`}/>
        );

        const charItem = (
            <ItemDetail item={currentCharacter}
                        className="char-list__item"
                        renderErrorMsg={
                            (
                                <span className="char-list__error">Please select character</span>
                            )
                        }>
                          <Field label="gender" title="Gender" className="char-list__label char-list__label_gender"/>
                          <Field label="died" title="Died" className="char-list__label char-list__label_died"/>
                          <Field label="born" title="Born" className="char-list__label char-list__label_born"/>
                          <Field label="culture" title="Culture" className="char-list__label char-list__label_culture"/>
            </ItemDetail>
        );

        return (
            <section className="char-list">
                <h2 className="visually-hidden">Characters List</h2>
                <RowBlock left={itemList} right={charItem}/>
            </section>
        )
    }
}