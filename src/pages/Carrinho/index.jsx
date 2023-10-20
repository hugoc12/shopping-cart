import './style.css';
import logo from '../../assets/react.svg';
import { Container, Navbar, Nav, Image } from 'react-bootstrap'

function Carrinho(props) {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" id='navBarHome'>
                <Container>
                    <Navbar.Brand href="/"><Image src={logo} alt='logo' /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/carrinho" className='linkActive'>Carrinho</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>CARRINHO</h1>
        </div>
    );
}

export default Carrinho;