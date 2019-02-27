import React from 'react';
import '../app.css';

const Animalito = (props) => {

    return (

      <div className="card">
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </div>
    )
  }

export default Animalito;
