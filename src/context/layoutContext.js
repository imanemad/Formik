import { useState } from "react";
import { createContext } from "react";

export const LayoutContext=createContext({
    menu:false,
    setMenu:()=>{}
})

const LayoutContextContainer=({children})=>{
    const [menu,setMenu]=useState(false)
    return(
        <LayoutContext.Provider value={{menu,setMenu}}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutContextContainer;