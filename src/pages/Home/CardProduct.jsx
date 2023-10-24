import { useContext } from 'react'
import { Card, Button, Carousel } from "react-bootstrap";
import { GlobalContext } from '../../services/contextGlobal';
import PropTypes from 'prop-types';

const CurrencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

function CardProduct(props) {
    const context = useContext(GlobalContext);
    const { dataProduct } = props;

    function addCart() {
        let { animeIconCart } = props;
        let productToCart = Object.assign({
            qtde:1,
            total:dataProduct.price
        }, dataProduct);
        context.setCart([...context.cart, dataProduct]);
        animeIconCart.current.restart();
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
                <Button variant="primary" onClick={(e) => addCart()}>COMPRAR</Button>
            </Card.Body>
        </Card>
    );
}

CardProduct.propTypes = {
    animeIconCart: PropTypes.object,
    dataProduct: PropTypes.object
}

export default CardProduct;