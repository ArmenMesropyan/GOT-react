import React, {Component} from 'react';
import {Header, RandomChar} from '../index';
import {CharacterPage, BookPage, HousePage} from '../Pages';
import ToggleRandomChar from '../ToggleRandomChar/ToggleRandomChar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    state = {
        pages: [
            {label: 'Characters', link: '/characters/', active: true},
            {label: 'Houses', link: '/Houses/'},
            {label: 'Books', link: '/books/'},
        ],
        showChar: true,
    }
    toggleRandomChar = () => {
        const isShow = this.state.showChar;
        this.setState({showChar: !isShow});
    }
    render() {
        const {pages, showChar} = this.state;
        const randomChar = showChar ? <RandomChar /> : null;

        return (
            <Router>
                <main className="app">
                    <Header pages={pages}/>

                    {randomChar}

                    <ToggleRandomChar toggleRandomChar={this.toggleRandomChar}/>

                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/books' component={BookPage}/>
                    <Route path='/houses' component={HousePage}/>
                </main>
            </Router>
        );
    }
}