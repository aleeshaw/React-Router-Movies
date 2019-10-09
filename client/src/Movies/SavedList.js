<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to="/">
      <div className="home-button">
        Home
      </div>
    </Link>
  </div>
);
=======
import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  console.log(props);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">
        <Link exact to="/movies">
          Home
        </Link>
      </div>
    </div>
  );
};
>>>>>>> 699b21a1198c7f94ab1f14c1af8a135a11586322

export default SavedList;