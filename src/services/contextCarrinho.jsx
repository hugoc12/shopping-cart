import { createContext } from "react";
import PropTypes from 'prop-types';

export const Context = createContext(null);

function ContextCarrinho({ children }) {
    return (
        <Context.Provider value={{
            name:'Context carrinho!'
        }}>
            {children}
        </Context.Provider>
    );
}

ContextCarrinho.propTypes = {
    children:PropTypes.node.isRequired
}

export default ContextCarrinho;