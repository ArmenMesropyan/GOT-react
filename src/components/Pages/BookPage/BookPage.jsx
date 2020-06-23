import React, {Component} from 'react';
import {ItemDetail, ItemList, Field, RowBlock} from '../../index';
import {GetService} from '../../../services';
import './BookPage.scss';

export default class CharList extends Component {

    state = {
        currentBook: null,
    }

    getService = new GetService();

    showBook = (currentBook) => {
        this.setState({currentBook});
    }

    render() {
        const {currentBook} = this.state;
        const bookList = (
            <ItemList showItem={this.showBook} 
                      getData={this.getService.getAllBooks}
                      renderLabel={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
        );

        const bookItem = (
            <ItemDetail item={currentBook}
                        className="book-list__item"
                        renderErrorMsg={
                            (
                                <span className="book-list__error">Please select book</span>
                            )
                        }>
                          <Field label="name" title="Name" className="book-list__label book-list__label_name"/>
                          <Field label="numberOfPages" title="Pages" className="book-list__label book-list__label_pages"/>
            </ItemDetail>
        );

        return (
            <section className="books-list">
                <h2 className="visually-hidden">Books List</h2>
                <RowBlock left={bookList} right={bookItem}/>
            </section>
        )
    }
}