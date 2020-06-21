import React, {Component} from 'react';
import {Table, Card, CardBody, CardText, CardTitle} from 'reactstrap';
import {Spinner} from '../index';

export default class CharItem extends Component {
    
    render() {
        const {character} = this.props;
        if(!character) return <Spinner />
        const {name, gender, born, died, culture} = character;

        return (
            <Card tag="ul" className="char-list__character">
                <CardBody tag="li" className="char-list__item">
                    <CardTitle tag="h3" className="char-list__title">
                        {name || 'no data.'}
                    </CardTitle>
                    <CardText tag="div" className="char-list__table">
                        <Table>
                            <thead className="visually-hidden">
                            <tr>
                                <th>{name || 'no data.'}</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>{gender || 'no data.'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Born</th>
                                    <td>{born || 'no data.'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Died</th>
                                    <td>{died || 'no data.'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Culture</th>
                                    <td>{culture || 'no data.'}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
};