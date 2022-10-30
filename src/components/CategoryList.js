import CtaegoryItem from "./CtaegoryItem";
import React from "react";


const CategoryList = ({ catalog }) => {

  return (
    <React.Fragment>
      <div className="list">
        {catalog.map((el => (
          <CtaegoryItem key={el.idCategory} {...el}></CtaegoryItem>
        )))}
      </div>
    </React.Fragment>
  )
}

export default CategoryList;