import React from "react";

const Card = ({title, imgUrl, desc, url, reverse }) => {
  return (
    <div className={`row ${reverse ? "reverse" : ""}`}>
      <div className="col-md-6">
        <img src={imgUrl} alt="Custom Jwellery" className="img-fluid" />
      </div>
      <div className="home-row-text row-text">
        <h1 className="home-cont-head">{title}</h1>
        <p>{desc}</p>
        <div className="navbar-contact home-btn">
          <a href={url} className="contact-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
