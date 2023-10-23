import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const Context = createContext(null);

function ContextHome({children}) {
    const [cartSide, setCartSide] = useState(false);
    const [cart, setCart] = useState([]);
    const products = {
        123456789:{
            id:'123456789',
            name:'Dunk Oil Green',
            price:750.90,
            saldo:10,
            imgs:['./src/assets/dunkoilgreen-0.png', './src/assets/dunkoilgreen-1.png']
        },

        123456147:{
            id:'123456147',
            name:'Dunk Pearl White',
            price:899.90,
            saldo:8,
            imgs:['./src/assets/dunkpearlwhite-0.png', './src/assets/dunkpearlwhite-1.png']
        },

        123456258:{
            id:'123456258',
            name:'Dunk Head 2 Head',
            price:599.00,
            saldo:7,
            imgs:['./src/assets/dunkhead2head-0.png', './src/assets/dunkhead2head-1.png']
        },

        123456369:{
            id:'123456369',
            name:'Dunk Geode Teal',
            price:799.90,
            saldo:5,
            imgs:['./src/assets/dunkgeodeteal-0.png', './src/assets/dunkgeodeteal-1.png']
        }
    }

    return (
        <Context.Provider value={{
            products,

            cartSide,
            setCartSide,

            cart,
            setCart
        }}>
            {children}
        </Context.Provider>
    );
}

ContextHome.propTypes = {
    children:PropTypes.node.isRequired
}

export default ContextHome;