import React from "react";
import { useSelector } from "react-redux";


function Menu() {
    const stateTitulo = useSelector((state) => 
    state.tituloReducer.titulo
    )
    return (
        <div>{stateTitulo}</div>
    )
}

export default Menu;





