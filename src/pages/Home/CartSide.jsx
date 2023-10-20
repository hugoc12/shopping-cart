import { Context } from '../../services/contextHome';
import {Offcanvas} from 'react-bootstrap';
import { useContext } from 'react';

function CartSide(props) {
    const context = useContext(Context);

    return (
        <Offcanvas show={context.cartSide} onHide={(e)=>context.setCartSide(false)}  placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default CartSide;