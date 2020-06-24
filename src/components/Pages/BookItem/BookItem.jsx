import React, {Component} from 'react';
import {ItemDetail, Field} from '../../index';
import {GetService} from '../../../services';
import './BookItem.scss';
import { Container, Row, Col } from 'reactstrap';

export default class BookItem extends Component {

    state = {
        currentBook: null,
        error: false,
    }

    getService = new GetService();

    async getBook(id) {
        try {
            const currentBook = await this.getService.getBookById(id);
            this.setState({currentBook});
        } catch (error) {
            this.setState({error: true});
        }
    }

    componentDidMount() {
        const {id} = this.props;
        this.getBook(id);
    }

    render() {
        const {currentBook} = this.state;

        return (
            <section className="book">
                <h2 className="visually-hidden">Book</h2>
                <Container>
                    <Row>
                        <Col md="6">
                            <ItemDetail className="book__item book-item"
                                item={currentBook}
                                renderErrorMsg={
                                    (
                                        <span className="book-list__error error">Please select book</span>
                                    )
                                }>
                                <Field label="name" title="Name" className="book-list__label book-list__label_name"/>
                                <Field label="numberOfPages" title="Pages" className="book-list__label book-list__label_pages"/>
                                <Field label="publisher" title="Publisher" className="book-list__label book-list__label_publisher"/>
                                <Field label="country" title="Country" className="book-list__label book-list__label_country"/>
                                <Field label="mediaType" title="Media Type" className="book-list__label book-list__label_mediatype"/>
                            </ItemDetail>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}