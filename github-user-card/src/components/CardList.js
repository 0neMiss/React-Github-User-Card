// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Card from "./Card"


const CardList = props => {
  return (
    <div className="shopping-list">
      <Card/>
    </div>
  );
};

export default CardList;