import React, { useRef } from "react"
import ShowRecipe from "./ShowRecipe";
import IngredientShown from "./IngredientShown";

export default function MainContent(){
    const [ingredient,setIngredient] = React.useState([]);
    
    

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const ingredientItem = formData.get("ingredient")
        setIngredient(prevItem => [
            ...prevItem,
            ingredientItem
        ])

        e.target.reset()
        

    }
    function handleDelete(indexDel){
        setIngredient((prevItems)=>[
            ...prevItems.slice(0,indexDel),
            ...prevItems.slice(indexDel+1)
        ])
    }
    

    

    return(
        <main>
            <form onSubmit={handleSubmit} method="GET">
                <input type="text" name="ingredient" placeholder="e.g orgeno" />
                <button>Add Ingredient</button>
            </form>
            {ingredient.length > 0 && <IngredientShown ingredient = {ingredient} handleDelete={handleDelete}  /> }

            
        </main>
    )
}