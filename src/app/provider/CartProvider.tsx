import { createContext, PropsWithChildren, useContext } from "react";


export const cartContext = createContext({})


const CartProvider = ({children}:PropsWithChildren)=>{ //helper type provided by React:
    return (
        <cartContext.Provider value={{items:[1,2,3]}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;


// to prevent from importing  two times, so it is liked a custom hooked 
export const useCart = ()=> useContext(cartContext)
