import { useState } from 'react';
import { MealList } from './MealList';
import "./Styles.css"

export const Home = () => {//Privado

    const [cal, setCal] = useState(2000);
    const [mealData, setMealData] = useState(null);
    const uri = process.env.REACT_APP_URL;
    const k = process.env.REACT_APP_KEY;




    function getMeals() {


        fetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)
            .then((response) => response.json()) //Usamos el api json
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error")
            })
    }

    function handleChange(e) {
        setCal(e.target.value);

    }

    return (
       //Meal list recibe la lista de datos.
        <div class="p-5 text-center bg-light" id='divHeader'>
            <section>

                <h2 class="mb-3" id='title'>PLAN DE ALIMENTACION </h2>
                <input type='number'
                    
                    placeholder='Calorias'
                    onChange={handleChange} />
                    

                <button 
                type="submit"
                class="btn btn-primary mb-2"
                onClick={getMeals}>Mostrar</button>
            </section>
        
            {mealData &&<MealList mealData={mealData} />}
        </div>

    )
} 