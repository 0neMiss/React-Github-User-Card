// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";



const FollowerCard = props => {
  return (
    <div className="follower-card">
    <div className = "name">{props.login}</div>
    <img className = "follower-img" src = {props.avatar_url}/>

    </div>
  );
};

export default FollowerCard;
