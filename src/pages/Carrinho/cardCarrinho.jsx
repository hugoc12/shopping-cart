import { useContext } from 'react';
import { GlobalContext } from '../../services/contextGlobal';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import deleteLogo from '../../assets/trash.svg';

const NumberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

function CardCarrinho(props) {
    const globalContext = useContext(GlobalContext);
    const { dataProduct } = props;

    function defQtde(parameter, id) {
        let cartCopy = Object.assign({}, globalContext.cart);
        let { qtde, total, saldo, price } = cartCopy[id];

        if (parameter === 'remove' && qtde > 1) {
            qtde -= 1;
        } else if (parameter === 'add' && !(qtde === saldo)) {
            qtde += 1;
        }

        total = qtde * price;
        cartCopy[id].qtde = qtde;
        cartCopy[id].total = total;

        globalContext.setCart(cartCopy);
    }

    function deleteItem(id){
        let cartCopy = Object.assign({}, globalContext.cart);
        delete cartCopy[id];
        globalContext.setCart(cartCopy);
    }

    return (
        <div className='cardCarrinho'>
            <Image src={dataProduct.imgs[0]} alt='imgProduto' className='imgProduto' rounded />
            <div>
                <h2>{dataProduct.name}</h2>
                <div className='controlQtde'>
                    <span className='bttControlQtde' onClick={(e)=>defQtde('remove', dataProduct.id)}>-</span>
                    <span>{dataProduct.qtde}</span>
                    <span className='bttControlQtde' onClick={(e)=>defQtde('add', dataProduct.id)}>+</span>
                </div>
            </div>
            <h5>{NumberFormat.format(dataProduct.total)}</h5>
            <Image src={deleteLogo} alt='deleteLogo' className='deleteLogo' onClick={(e)=>deleteItem(dataProduct.id)} />
        </div>
    );
}

CardCarrinho.propTypes = {
    dataProduct: PropTypes.object
}

export default CardCarrinho;