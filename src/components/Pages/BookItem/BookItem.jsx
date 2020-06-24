import React, {Component} from 'react';
import {ItemDetail, Field} from '../../index';
import {GetService} from '../../../services';
import './BookItem.scss';

export default class BookItem extends Component {

    state = {
        currentBook: null,
    }

    getService = new GetService();

    componentDidMount() {
        const {id} = this.props;
        console.log(id);
    }

    render() {
        const {currentBook} = this.state;

        return (
            <section className="book">
                <h2 className="visually-hidden">Book</h2>
                <ItemDetail item={currentBook}
                        renderErrorMsg={
                            (
                                <span className="book-list__error">Please select book</span>
                            )
                        }>
                          <Field label="name" title="Name" className="book-list__label book-list__label_name"/>
                          <Field label="numberOfPages" title="Pages" className="book-list__label book-list__label_pages"/>
                </ItemDetail>
            </section>
        )
    }
}