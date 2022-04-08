import React from "react";
import "./Pagination.css"

const Pagination = ({ totalPages, pageFunction }) => {
  const buttonArray = new Array(totalPages)
    .fill(0)
    .map((_, index) => index + 1);
  console.log(buttonArray);
  return (
    <div>
      {
        buttonArray.map((number) => {
        return <button className="number-button" onClick={() => pageFunction(number)}>{number}</button>;
        })
      }
    </div>
  );
};

export default Pagination;
