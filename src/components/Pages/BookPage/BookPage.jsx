import React, {Component} from 'react';
import {ItemList} from '../../index';
import {GetService} from '../../../services';
import {Container} from 'reactstrap';
import './BookPage.scss';

export default class BookPage extends Component {

    state = {
        currentBook: null,
    }

    getService = new GetService();

    showBook = (currentBook) => {
        this.setState({currentBook});
    }

    render() {
        return (
            <section className="books-list">
                <h2 className="visually-hidden">Books List</h2>
                <Container>
                    <ItemList showItem={this.showBook} 
                        getData={this.getService.getAllBooks}
                        renderLabel={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
                </Container>
            </section>
        )
    }
}