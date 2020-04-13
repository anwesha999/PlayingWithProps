import React from "react";
function FoodDetails({ name, measure, calories }) {
  return (
    <div>
      <span>{name}</span>
      <span>{measure}</span>
      <span>{calories}</span>
    </div>
  );
}
export default FoodDetails;
