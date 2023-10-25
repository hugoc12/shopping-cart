import { GlobalContext } from '../../services/contextGlobal';
import { Context } from '../../services/contextHome';
import { Offcanvas, Image, Button } from 'react-bootstrap';
import { useContext } from 'react';

const CurrencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'

})

function CartSide(props) {
    const contextGlobal = useContext(GlobalContext);
    const context = useContext(Context)
    const cartList = Object.entries(contextGlobal.cart);
    const totalPedido = cartList.map((el, ind)=>{
        return el[1].total;
    }).reduce((acumulador, currentValue)=>acumulador + currentValue, 0);

    function defQtde(parameter, id){
        let cartCopy = Object.assign({}, contextGlobal.cart);
        let {qtde, total, saldo, price} = cartCopy[id];

        if(parameter === 'remove' && qtde > 1){
            qtde -= 1;
        }else if(parameter === 'add' && !(qtde===saldo)){
            qtde += 1;
        }

        total = qtde * price;
        cartCopy[id].qtde = qtde;
        cartCopy[id].total = total;

        contextGlobal.setCart(cartCopy);
    }

    function removeItem(id){
        let cartCopy = Object.assign({}, contextGlobal.cart);
        delete cartCopy[id];
        contextGlobal.setCart(cartCopy);
    }

    return (
        <Offcanvas show={context.cartSide} onHide={(e) => context.setCartSide(false)} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartList.map((el, ind) => {
                    return (
                        <div className='itemCartSide' key={el[0]}>
                            <Image src={el[1].imgs[0]} alt="item" rounded />
                            <div>
                                <h5>{el[1].name}</h5>
                                <h6>{CurrencyFormat.format(el[1].total)}</h6>
                                <div className='qtde'>
                                    <span className='btt' onClick={(e)=>defQtde('remove', el[1].id)}>-</span>
                                    <span>{el[1].qtde}</span>
                                    <span className='btt' onClick={(e)=>defQtde('add', el[1].id)}>+</span>
                                </div>
                            </div>
                            <Button variant='outline-danger' className='bttRemove' onClick={(e)=>removeItem(el[1].id)}>X</Button>
                        </div>
                    )
                })}
            </Offcanvas.Body>
            <div className='footer'>
                <h4>TOTAL: {CurrencyFormat.format(totalPedido)}</h4>
                <span>FINALIZAR</span>
            </div>
        </Offcanvas>
    );
}

export default CartSide;