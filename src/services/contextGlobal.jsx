import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext(null);

function ContextGlobal({children}) {
    const [cart, setCart] = useState([])

    return (
        <GlobalContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

ContextGlobal.propTypes = {
    children:PropTypes.node.isRequired
}

export default ContextGlobal;