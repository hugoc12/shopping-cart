import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const Context = createContext(null);

function ContextHome({children}) {
    const [cartSide, setCartSide] = useState(false);

    return (
        <Context.Provider value={{
            cartSide,
            setCartSide
        }}>
            {children}
        </Context.Provider>
    );
}

ContextHome.propTypes = {
    children:PropTypes.node.isRequired
}

export default ContextHome;