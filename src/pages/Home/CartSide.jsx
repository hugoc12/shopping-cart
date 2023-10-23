import { Context } from '../../services/contextHome';
import {Offcanvas, Image} from 'react-bootstrap';
import { useContext, useState } from 'react';

function CartSide(props) {
    const context = useContext(Context);
    const {cart} = context;

    return (
        <Offcanvas show={context.cartSide} onHide={(e)=>context.setCartSide(false)}  placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='itemCartSide'>
                    <Image src="./src/assets/dunkoilgreen-0.png" alt="item" rounded />
                    <div>
                        <h4>Dunk Oil Green</h4>
                        <h6>R$ 250,90</h6>
                        <div className='qtde'>
                            <span className='btt'>-</span>
                            <span>0</span>
                            <span className='btt'>+</span>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
            <div className='footer'>
                <h4>TOTAL: R$690,90</h4>
                <span>FINALIZAR</span>
            </div>
        </Offcanvas>
    );
}

export default CartSide;