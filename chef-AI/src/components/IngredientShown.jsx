import React from "react"
import del from "../assets/dlt.png"
import {getRecipeFromMistral} from "../ai.js"
import ShowRecipe from "./ShowRecipe.jsx"


export default function IngredientShown(props){
    const [recipe,setRecipe] = React.useState(null)
    const [loading,setLoading] = React.useState(false)

    const list = props.ingredient.map((item,index)=> {

        return <button className="enteredItems" key={index}>
            {item}
            <img src={del} alt="" onClick={() => props.handleDelete(index)}/>
        </button>
       
    })

    async function fetchRecipe() {
        setLoading(true)
        setRecipe(null)
        try{
            const generatedRecipe = await getRecipeFromMistral(props.ingredient);
            setRecipe(generatedRecipe);
        }
        catch(error){
            setRecipe("An error occurred while fetching the recipe. Please try again.")
        }
        finally{
            setLoading(false)
        }
    }
    


    return(
        <section>
            <div className="itemContainer">
                {list}
            </div>

            {props.ingredient.length > 3 &&<div className="getRecipe">
                <div className="getRecipeContent">
                    <h1>Ready for recipe ?</h1>
                    <p>Genreate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={fetchRecipe} disabled={loading}>
                    {loading ? "Loading..." : "Get a Recipe"}
                </button>
            </div>}
            {recipe && <ShowRecipe recipe={recipe}/>}
        </section>
    )
    
}