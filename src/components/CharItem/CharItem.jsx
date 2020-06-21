import React from 'react';
import {Table, Card, CardBody, CardText, CardTitle} from 'reactstrap';

const CharItem = () => (
    <Card tag="ul" className="char-list__character">
        <CardBody tag="li" className="char-list__item">
            <CardTitle tag="h3" className="char-list__title">
                Name
            </CardTitle>
            <CardText tag="div" className="char-list__table">
                <Table>
                    <thead className="visually-hidden">
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Gender</th>
                            <td>Gender</td>
                        </tr>
                        <tr>
                            <th scope="row">Born</th>
                            <td>Born</td>
                        </tr>
                        <tr>
                            <th scope="row">Died</th>
                            <td>Died</td>
                        </tr>
                        <tr>
                            <th scope="row">Culture</th>
                            <td>Culture</td>
                        </tr>
                    </tbody>
                </Table>
            </CardText>
        </CardBody>
    </Card>
);

export default CharItem;