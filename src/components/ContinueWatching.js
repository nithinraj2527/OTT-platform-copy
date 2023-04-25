import React from "react";
import "./ContinueWatching.css";

const ContinueWatching = () => {
  return (
    <div className="continue-watching">
      <h5 className="title-head">
        Continue Watching for Professor
        <span className="explore-all">Explore All</span>
      </h5>
      <div>
        <div className="slider">
          <div className="movie-list">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
