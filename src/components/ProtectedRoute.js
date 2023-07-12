//import { Children } from "react";
import { Navigate } from 'react-router-dom';


const ProtectedRoutes =({ing, children })=>{
    if (!ing) {
        console.log("El usuario no esta autenticado")
        return<Navigate to={"/"} />//Hago referencia al componente no al hook navigate
    }
    return children;// children es el home
}

export default ProtectedRoutes;