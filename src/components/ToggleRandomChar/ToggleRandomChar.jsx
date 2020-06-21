import React from 'react';
import {Container, Button} from 'reactstrap';

const ToggleRandomChar = ({toggleRandomChar}) => {
    return (
        <Container>
            <Button onClick={toggleRandomChar}>Toggle Random Character</Button>
        </Container>
    )
}

export default ToggleRandomChar;