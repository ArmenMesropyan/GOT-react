import React from 'react';
import {Container, Button} from 'reactstrap';

const ToggleRandomChar = ({toggleRandomChar}) => {
    return (
        <section className="toggler">
            <h2 className="visually-hidden">Random character toggler</h2>
            <Container>
                <Button onClick={toggleRandomChar} className="toggler__btn">Toggle Random Character</Button>
            </Container>
        </section>
    )
}

export default ToggleRandomChar;