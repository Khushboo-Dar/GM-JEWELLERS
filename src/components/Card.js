import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({ title, url, imgUrl }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="Custom Jwellery" className="card-img" />
      <div>
        <h2 className="card-head">{title}</h2>
        <a href={url} className="card-url">
          Read more <FaArrowRightLong />{" "}
        </a>
      </div>
    </div>
  );
};

export default Card;
