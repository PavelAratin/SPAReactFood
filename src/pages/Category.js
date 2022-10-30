import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategories } from "../api";
import Preloader from "../components/Preloader";
import MealsList from "../components/MelasList";
import { useHistory } from "react-router-dom";

const Category = () => {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const { goBack } = useHistory();
  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name, setMeals]);
  console.log(meals)


  return (
    <React.Fragment>
      <button onClick={goBack} className="btn">GO BACK</button>
      {!meals.length ? <Preloader></Preloader> : <MealsList meals={meals}></MealsList>}
    </React.Fragment>
  )

}

export default Category;