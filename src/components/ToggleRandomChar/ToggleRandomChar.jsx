import React from 'react';
import {Container, Button} from 'reactstrap';

const ToggleRandomChar = ({toggleRandomChar}) => {
    return (
        <section className="toggler">
            <Container>
                <Button onClick={toggleRandomChar} className="toggler__btn">Toggle Random Character</Button>
            </Container>
        </section>
    )
}

export default ToggleRandomChar;