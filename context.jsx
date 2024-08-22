import { createContext, useState } from "react";
import Menu from './screens/menu.json';


export const context = createContext(null)

export default function Contextmenu({children}) {
    
    const [menu , setmenu] = useState(Menu);

    return(
        <context.Provider value={{menu,setmenu}}>
            {children}

        </context.Provider>
    )

    
}

