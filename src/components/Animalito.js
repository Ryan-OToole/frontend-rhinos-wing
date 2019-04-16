import React from 'react';
import '../css/App.css';


const Animalito = (props) => {

    return (
        <div className="card">
          <h3>{props.post.title}</h3>
          <p className="card-body">{props.post.body}</p>
        </div>
    )
  }

export default Animalito;
