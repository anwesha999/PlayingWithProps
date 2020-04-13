import React from "react";
import "./styles.css";
import FoodDetails from "./foodDetails";
import calorieData from "./data/calorie-data";

export default function App() {
  function addElement(num1) {
    // return num1 + 2; //state
    return <div> Your sum is {num1 + 2}</div>;
  }
  function LiveHeader(props) {
    return <h1>{props.heading}</h1>;
  }
  //  function LiveHeader(heading) {
  //   return <h1>{heading}</h1>;
  //}.......Destructuring

  return (
    <div className="App">
      <LiveHeader heading={"Welcome"} />
      {addElement(32)}
      <h1>Trying props </h1>
      {calorieData.slice(0, 10).map(({ name, measure, calories }) => (
        <FoodDetails name={name} measure={measure} calories={calories} />
      ))}
    </div>
  );
}
