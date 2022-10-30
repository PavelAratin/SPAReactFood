import { Link } from "react-router-dom";

const Meal = ({ strMeal, idMeal, strMealThumb }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <Link to={`/meal/${idMeal}`} className="btn">Watch recipies</Link>
    </div>
  )

}

export default Meal;