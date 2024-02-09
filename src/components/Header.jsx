import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <Row  style={{marginTop: '-60px', marginBottom: '20px'}}>
            <Col>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/"><h2>Inicio</h2></Navbar.Brand>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    );
}

export default Header;