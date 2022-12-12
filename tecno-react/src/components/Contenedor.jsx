import React from "react";

const Contenedor = ({lugar, children}) => {
    return (
        <div>
            <h1>{lugar}</h1>
            {children}
        </div>
    )
}

export default Contenedor;