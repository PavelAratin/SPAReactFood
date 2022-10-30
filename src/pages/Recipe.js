import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealbyId } from "../api";
import Preloader from "../components/Preloader";

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams();
  const { goBack } = useHistory();
  useEffect(() => {
    getMealbyId(id).then((data) => setRecipe(data.meals[0]))
  }, [id])
  return (
    <React.Fragment>
      <button className="btn" onClick={goBack}>Go Back</button>
      {!recipe.idMeal
        ? (<Preloader></Preloader>)
        : (<div className="recipie">
          <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
          <h1>{recipe.strMeal}</h1>
          <h6>Category:{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions ?(
            <div className="row">
              <h5>Video recipe</h5>
              <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}></iframe>
            </div>
          ) : null}</p>
        </div>)}
    </React.Fragment>
  )

}

export default Recipe;