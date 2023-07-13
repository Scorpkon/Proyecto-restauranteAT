import { useEffect, useState } from "react";
import "./Styles.css"

import { useFetch } from "./CustomHookfetch";
export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const k = process.env.REACT_APP_KEY;
    const [data]= useFetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`)/*Añadida */

const [id, setId]= useState();

    useEffect(() => {
        setImageUrl(data.image);
        setId(meal.id)
        

        

    }, [id]);

    return (
       
        
                <div class="card text-danger  mb-3" id="divCard" >
                    <img src={imageUrl} alt="receta" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{meal.title} </h5>



                        <ul class="list-group ">
                            <li class="list-group-item bg-warning mb-3">Tiempo de preparacion:{meal.readyInMinutes} minutos </li>
                            <li class="list-group-item bg-warning mb-3 ">Porciones:{meal.servings} </li>
                        </ul>
                        <a href={meal.sourceUrl} class="btn btn-primary"> Ir a la receta</a>
                    </div>
                </div>
            
        


    )

}