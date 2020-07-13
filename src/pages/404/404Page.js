import React from "react";
import "./404-page.styles.scss";

import Page404Image from "../../assets/images/SVG/SVG/SVG/404Image.svg";

import { useHistory } from "react-router-dom";
  


const Page404 = ( props ) => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="page-404-body">
      <div className="card-containers-404">
        <div className="txt-btn-image-container">
          <div className="page-404-image-container">
            <img
              className="page-404"
              src={Page404Image}
              alt="404 page"
              size="500"
            ></img>
            </div>
            <div className="txt-btn-container">
              <h1 className="error-heading">Error</h1>
              <p className="error-text">
                Oops! The page you are looking for could not be found.
              </p>
              <button 
                className="home-btn"
                onClick={handleClick}
                >
                Return to the present</button>
            </div>
         
        </div>
      </div>
    </div>
  );
};
export default Page404;
