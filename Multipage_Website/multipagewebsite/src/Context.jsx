//Warehouse 
//provider
//Consumer /useContext hook
import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
const AppContext= React.createContext();
const initialstate={
    name:'',
    image:'',
}

const  AppProvider= ({children})=>{
    
    const [state, dispatch]= useReducer(reducer, initialstate);
    const updateHomePage=()=>{
        return dispatch(
            {
                type:'HOME_UPDATE',
                payload:{
                    name: 'Saad Company',
                    image: './images/developer.png',
                }
                

            }
        )
}
const updateAboutPage=()=>{
    return dispatch({
        type:'ABOUT_UPDATE',
        payload:{
            name: 'Saad Khan',
            image: './images/ok.png',
        }
    })
}

    return <AppContext.Provider value={{...state, updateHomePage,updateAboutPage}}> 
        {children}
    </AppContext.Provider>

}
const UseGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider, UseGlobalContext};