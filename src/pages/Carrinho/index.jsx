import { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { Context } from '../../services/contextCarrinho';
import { GlobalContext } from '../../services/contextGlobal';

function Carrinho(props) {
    const navigate = useNavigate();
    const context = useContext(Context);
    const globalContext = useContext(GlobalContext);

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" id='navBarHome'>
                <Container>
                    <Navbar.Brand href="#" onClick={(e)=>navigate('/')}><Image src='./src/assets/react.svg' alt='logo'/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={(e)=>navigate('/')}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={(e)=>navigate('/carrinho')} className='linkActive'>Carrinho</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>CARRINHO - {globalContext.name}</h1>
        </div>
    );
}

export default Carrinho;