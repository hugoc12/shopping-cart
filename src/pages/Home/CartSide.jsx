import { GlobalContext } from '../../services/contextGlobal';
import { Context } from '../../services/contextHome';
import { Offcanvas, Image } from 'react-bootstrap';
import { useContext } from 'react';

const CurrencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'

})

function CartSide(props) {
    const contextGlobal = useContext(GlobalContext);
    const context = useContext(Context)
    const { cart } = contextGlobal;

    return (
        <Offcanvas show={context.cartSide} onHide={(e) => context.setCartSide(false)} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/*cart.map((el, ind) => {
                    return (
                        <div className='itemCartSide' key={el.id}>
                            <Image src={el.imgs[0]} alt="item" rounded />
                            <div>
                                <h5>{el.name}</h5>
                                <h6>{CurrencyFormat.format(el.price)}</h6>
                                <div className='qtde'>
                                    <span className='btt'>-</span>
                                    <span>0</span>
                                    <span className='btt'>+</span>
                                </div>
                            </div>
                        </div>
                    )
                })*/}
            </Offcanvas.Body>
            <div className='footer'>
                <h4>TOTAL: R$690,90</h4>
                <span>FINALIZAR</span>
            </div>
        </Offcanvas>
    );
}

export default CartSide;