import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const RowBlock = ({left, right}) => (
    <Container>
        <Row>
            <Col lg="7">
                {left}
            </Col>
            <Col lg="5">
                {right}
            </Col>
        </Row>
    </Container>
);

export default RowBlock;