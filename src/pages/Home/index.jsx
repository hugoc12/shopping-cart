import './style.css';
import { useContext, useState } from 'react';
import { Context } from '../../services/contextHome';

import iconCart from '../../assets/shopping-bag.svg';
import logo from '../../assets/react.svg';

import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import anime from 'animejs';
import CartSide from './CartSide';

function Home(props) {
    const context = useContext(Context);
    //const [cart, setCart] = useState([]);

    function addCart() {
        anime({
            targets: '.qtdeCart',
            translateY: -8,
            easing: 'easeOutExpo',
            direction: 'alternate',
            duration: 400
        })
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" id='navBarHome'>
                <Container>
                    <Navbar.Brand href="/"><Image src={logo} alt='logo' /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='linkActive'>Home</Nav.Link>
                        <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                    </Nav>
                    <div className='bttCart'>
                        <Image src={iconCart} alt='iconCart' className='iconCart' />
                        <div className='qtdeCart'><span>0</span></div>
                    </div>
                </Container>
            </Navbar>

            <CartSide />
            <h1>HOME</h1>
            <Button variant='primary' onClick={(e) => addCart()}>CART SIDE</Button>
        </div>
    );
}

export default Home;