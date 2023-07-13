 import { useEffect, useState } from "react";

export const useFetch =(url)=>{
    const [data, setData]=useState(null);
    //fetch: Promesa donde yo recibo el dato y dentor le indico que es lo que quiero que haga 
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data))
    }, [url]);
    return [data];
};