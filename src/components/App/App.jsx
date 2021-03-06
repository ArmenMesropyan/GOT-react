import React, {Component} from 'react';
import {Header, RandomChar} from '../index';
import {CharacterPage, BookPage, HousePage, BookItem} from '../Pages';
import ToggleRandomChar from '../ToggleRandomChar/ToggleRandomChar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    state = {
        pages: [
            {label: 'Characters', link: '/characters/'},
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
    setPath() {
        this.setState({activeLink: window.location.pathname});
    }
    componentDidMount() {
        this.setPath();
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
                    <Route path='/books' exact component={BookPage}/>
                    <Route path='/houses' component={HousePage}/>
                    <Route path='/books/:id' render={({match: {params}}) => <BookItem id={params.id}/>}/>
                </main>
            </Router>
        );
    }
}