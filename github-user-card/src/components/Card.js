import React from "react";

const Card = props => {
  console.log(props.avatar_url);

  return (
    <div className = "main-card">
      <h3 className = "login">{props.login}</h3>
      <div className = "avatar-container"></div>
      <img className = "main-avatar" src={props.avatar_url}/>
      <p className = "name">{props.name}</p>
    </div>
  );
};

export default Card;
