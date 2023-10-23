import {useContext} from 'react'
import { Card, Button, Carousel } from "react-bootstrap";
import { Context } from "../../services/contextHome";
import PropTypes from 'prop-types';
function CardProduct(props) {
    const context = useContext(Context);
    const {setCart} = context;
    const { dataProduct } = props;
    
    const CurrencyFormat = new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
    })

    function addCart() {
        let { animeIconCart } = props;
        setCart(dataProduct);
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