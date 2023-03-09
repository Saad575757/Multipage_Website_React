//Warehouse 
//provider
//Consumer /useContext hook
import React, { useContext } from "react";
const AppContext= React.createContext();

const  AppProvider= ({children})=>{
    return <AppContext.Provider value='Saad,18'> 
        {children}
    </AppContext.Provider>

}
const UseGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, UseGlobalContext};