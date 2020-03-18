// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import FollowerCard from "./FollowerCard"


const CardList = props => {
  return (
    <div className="follower-container">
    {props.followers.map(follower =>{
    return  <FollowerCard key = {Math.random()}login = {follower.login} avatar_url = {follower.avatar_url}/>
    })}

    </div>
  );
};

export default CardList;
