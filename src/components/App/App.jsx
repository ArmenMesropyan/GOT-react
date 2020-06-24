import React, {Component} from 'react';
import {Header, RandomChar} from '../index';
import {CharacterPage, BookPage, HousePage} from '../Pages';
import ToggleRandomChar from '../ToggleRandomChar/ToggleRandomChar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    state = {
        pages: [
            {label: 'Characters', link: '/characters/', active: true},
            {label: 'Houses', link: '/houses/'},
            {label: 'Books', link: '/books/'},
        ],
        activeLink: '/characters/',
        showChar: true,
    }
    toggleRandomChar = () => {
        const isShow = this.state.showChar;
        this.setState({showChar: !isShow});
    }
    onLinkChanged = (activeLink) => {
        this.setState({activeLink});
    }
    render() {
        const {pages, showChar, activeLink} = this.state;
        const randomChar = showChar ? <RandomChar /> : null;

        return (
            <Router>
                <main className="app">
                    <Header pages={pages} active={activeLink} onLinkChanged={this.onLinkChanged}/>

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