import './style.css';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../../services/contextHome';

import iconCart from '../../assets/shopping-bag.svg';
import logo from '../../assets/react.svg';

import { Container, Navbar, Nav, Image } from "react-bootstrap";
import anime from 'animejs';
import CartSide from './CartSide';
import CardProduct from './CardProduct';

function Home(props) {
    const animeIconCart = useRef(null); //ACESSO A ANIMAÇÃO
    const context = useContext(Context);

    useEffect(() => {
        animeIconCart.current = anime({ // PARA QUE NÃO HAJA O TRAVAMENTO DA ANIMAÇÃO ELA DEVE SER ATRIBUÍDA UMA ÚNICA VEZ.
            targets: '.qtdeCart',
            translateY: -8,
            easing: 'easeOutExpo',
            direction: 'alternate',
            duration: 400,
            autoplay: false
        });
    }, [])

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" id='navBarHome'>
                <Container>
                    <Navbar.Brand href="/"><Image src={logo} alt='logo' /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='linkActive'>Home</Nav.Link>
                        <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                    </Nav>
                    <div className='bttCart' onClick={(e)=>context.setCartSide(true)}>
                        <Image src={iconCart} alt='iconCart' className='iconCart' />
                        <div className='qtdeCart'><span>0</span></div>
                    </div>
                </Container>
            </Navbar>
            <CartSide />
            <h1>HOME</h1>
            <div className='containerProducts'>
                {Object.entries(context.products).map((el, ind) => {
                    return <CardProduct key={el[0]} animeIconCart={animeIconCart} dataProduct={el[1]} />
                })}
            </div>
        </div>
    );
}

export default Home;