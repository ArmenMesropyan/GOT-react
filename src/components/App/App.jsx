import React, {Component} from 'react';
import {Header, RandomChar} from '../index';

export default class App extends Component {
    state = {
        pages: [
            {label: 'Characters', link: '/characters/', active: true},
            {label: 'Houses', link: '/Houses/'},
            {label: 'Books', link: '/books/'},
        ]
    }
    render() {
        const {pages} = this.state;
        return (
            <>
                <Header pages={pages}/>
                <RandomChar />
            </>
        );
    }
}