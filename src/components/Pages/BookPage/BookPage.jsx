import React, {Component} from 'react';
import {ItemList} from '../../index';
import {GetService} from '../../../services';
import {Container} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import './BookPage.scss';

class BookPage extends Component {

    getService = new GetService();

    showBook = ({url}) => {
        const {history} = this.props;
        const link = url.slice(url.indexOf('/books'));
        history.push(link);
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

export default withRouter(BookPage);