import { useContext, useEffect, useState } from 'react'
import { Card, Button, Carousel } from "react-bootstrap";
import { GlobalContext } from '../../services/contextGlobal';
import PropTypes from 'prop-types';

const CurrencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

function CardProduct(props) {
    const [lockAddCart, setLockAddCart] = useState(false);
    const context = useContext(GlobalContext);
    const { dataProduct } = props;

    useEffect(()=>{
        if(Object.prototype.hasOwnProperty.call(context.cart, dataProduct.id)){
            setLockAddCart(true);
        }else{
            setLockAddCart(false);
        }
    }, [context.cart])

    function addCart() {
        let { animeIconCart } = props;
        if (!Object.prototype.hasOwnProperty.call(context.cart, dataProduct.id)) {
            let cartCopy = Object.assign({}, context.cart); //CÓPIA DO CARRINHO ATUAL.
            let productToCart = Object.assign({ //CONSTRUINDO OBJ DO PRODUTO COM AS PROPRIEDADES NECESSÁRIAS PARA O CARRINHO.
                qtde: 1,
                total: dataProduct.price
            }, dataProduct);
            Object.defineProperty(cartCopy, dataProduct.id, { //DEFINIÇÃO DO PRODUTO NO OBJ CARRINHO USANDO ID COMO REFERÊNCIA.
                enumerable: true,
                configurable: true,
                writable: true,
                value: productToCart,
            }) //ADICIONANDO PRODUTO AO CARRINHO
            context.setCart(cartCopy); //DEFININDO STATE CART
            setLockAddCart(true);
            animeIconCart.current.restart();
        }
    }

    return (
        <Card style={{ width: '18rem' }} className="cardProduct">
            <Carousel variant="dark" interval={null}>
                {dataProduct.imgs.map((el, ind) => {
                    return (
                        <Carousel.Item key={ind}>
                            <Card.Img variant="top" src={el} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Card.Body>
                <Card.Title>{dataProduct.name}</Card.Title>
                <Card.Text>
                    {CurrencyFormat.format(dataProduct.price)}
                </Card.Text>
                <Button variant={lockAddCart ? 'success':'primary'} onClick={(e) => addCart()} disabled={lockAddCart}>{lockAddCart ? 'ADDED':'ADD TO CART'}</Button>
            </Card.Body>
        </Card>
    );
}

CardProduct.propTypes = {
    animeIconCart: PropTypes.object,
    dataProduct: PropTypes.object
}

export default CardProduct;