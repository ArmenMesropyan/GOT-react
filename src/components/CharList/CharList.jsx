import React from 'react';
import {Table, Container, Row, Col} from 'reactstrap';
import {CharItem} from '../index';
import './CharList.scss';

const CharList = () => (
    <section className="char-list">
        <Container>
            <Row>
                <Col lg="7">
                    <Table className="char-list__characters">
                        <thead className="visually-hidden">
                        <tr>
                            <th>Names</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jon Snow</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col lg="5">
                    <CharItem />
                </Col>
            </Row>
        </Container>
    </section>
);

export default CharList;