import React from "react"

function Recipe ({recipe, index, deleteRecipe}) {
    return(
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="food"/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button id={index} name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    ) 
}

export default Recipe;