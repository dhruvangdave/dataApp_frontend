import React from 'react';
import DataContext from "./dataContext";

const DataState = (props) => {

    const data = {
        name: "Dhruvang",
        sweetName: "Darling",
        message: "Data not found"
    }

    const func = () =>{
        console.log("This is from func");
    }

    return (
        <DataContext.Provider value={{data, func}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;