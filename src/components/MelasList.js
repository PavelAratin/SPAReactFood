import React from "react";
import Meal from "./Meal";

const MealsList = ({ meals }) => {
  return (
    <React.Fragment>
      <div className="list">
        {meals.map(meal => (
          <Meal key={meal.idMeal} {...meal}></Meal>
        ))}
      </div>
    </React.Fragment>
  )
}
export default MealsList;