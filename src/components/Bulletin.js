import React from 'react';
import '../css/App.css';


const Bulletin = (props) => {

    return (
        <div className="card">
          <h3>{props.bulletin.title}</h3>
          <p className="card-body">{props.bulletin.body}</p>
        </div>
    )
  }

export default Bulletin;
