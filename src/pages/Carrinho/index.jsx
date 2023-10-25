import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { GlobalContext } from '../../services/contextGlobal';
import CardCarrinho from './cardCarrinho';

const NumberFormat = new Intl.NumberFormat('pt-BR', {
    style:'currency',
    currency:'BRL'
})

function Carrinho(props) {
    const navigate = useNavigate();
    const globalContext = useContext(GlobalContext);
    const listCart = Object.entries(globalContext.cart);
    const totalPedido = listCart.map((el, ind)=>{
        return(
            el[1].total
        )
    }).reduce((acumulador, currentValue)=>acumulador+currentValue, 0)

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
            <h1>CARRINHO</h1>
            <h2 style={{textAlign:'center'}}>TOTAL: {NumberFormat.format(totalPedido)}</h2>
            {listCart.map((el, ind)=>{
                return(
                    <CardCarrinho key={el[0]} dataProduct={el[1]}/>
                )
            })}
        </div>
    );
}

export default Carrinho;