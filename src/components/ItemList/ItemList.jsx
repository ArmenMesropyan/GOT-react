import React, {Component} from 'react';
import {Table} from 'reactstrap';
import {ErrorMsg, Spinner} from '../index';
import './ItemList.scss';

export default class ItemList extends Component {
    state = {
        list: null,
        error: false,
    }

    getItemsHTML(arr) {
        const {showItem} = this.props;
        return arr.map((item, i) => (
            <tr key={i}>
                <td onClick={() => showItem(item)}>{item.name}</td>
            </tr>
        ))
    }

    async updateItems() {
        try {
            const {getData} = this.props;
            const list = await getData();
            this.setState({list});
        } catch (error) {
            console.log(error);
            this.setState({error: true});
        }
    }

    componentDidMount() {
        this.updateItems();
    }
    
    render() {
        const {list, error} = this.state;

        if(error) return <ErrorMsg />
        if(!list) return <Spinner />

        const elements = this.getItemsHTML(list);

        return (
            <Table className="item-list__table">
                <thead className="visually-hidden">
                    <tr>
                        <th>Item List</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </Table>
        );
    }
}