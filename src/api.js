import { API_URL } from "./config";
const getMealbyId = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  return await response.json();
}

const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');
  return await response.json();
}

const getFilteredCategories = async (catName) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`);
  return await response.json();
}

export { getMealbyId, getAllCategories,getFilteredCategories };
