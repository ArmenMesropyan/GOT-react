import React, {Component} from 'react';
import {Header, RandomChar, CharList} from '../index';
import ToggleRandomChar from '../ToggleRandomChar/ToggleRandomChar';

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
            <>
                <Header pages={pages}/>
                {randomChar}
                <ToggleRandomChar toggleRandomChar={this.toggleRandomChar}/>
                <CharList />
            </>
        );
    }
}