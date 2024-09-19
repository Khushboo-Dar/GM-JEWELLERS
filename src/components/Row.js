import React from "react";

const Row = ({ imgUrl, text1, text2, heading, reverse }) => {
    return (
      <div className={`row ${reverse ? "reverse" : ""}`}>
        <div className="col-md-6">
          <img src={imgUrl} alt="Custom Jwellery" className="img-fluid" />
        </div>
        <div className="row-text">
          {heading && <h1 className="cont-head">Let Us Do The Hard Work</h1>}
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    );
  };

export default Row;