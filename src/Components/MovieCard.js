import React from "react";
import "../CSS/movieCard.css";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";

const MovieCard = ({ data }) => {
  const movieRate = (rate) => {
    switch (rate) {
      case "G":
        return "0+";
      case "PG":
        return "8+";
      case "PG-13":
        return "13+";
      case "R":
        return "17+";
      case "NC-17":
        return "17+";
      default:
        return rate;
    }
  };

  return (
    <div className="movieCardContainer">
      <div
        className="movieCard"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(25,25,38,0.00001) 42.31%, #191926 87.5%), url(${data.poster})`,
          backgroundSize: "cover",
          // backgroundBlendMode: "darken",
        }}
      >
        <div className="movieCard__top">
          <div className="movieCard__top--rate">{movieRate(data.rate)}</div>
          <IoMdHeart className="movieCard__top--icon" />
        </div>
        <div className="movieCard__bottom">
          <p className="movieCard__bottom--genre">{data.genre}</p>
          <div className="movieCard__bottom--reviews">
            <AiFillStar
              className={
                data.rating >= 1
                  ? "movieCard__bottom--reviews--active"
                  : "movieCard__bottom--reviews--inactive"
              }
            />
            <AiFillStar
              className={
                data.rating >= 3
                  ? "movieCard__bottom--reviews--active"
                  : "movieCard__bottom--reviews--inactive"
              }
            />
            <AiFillStar
              className={
                data.rating >= 6
                  ? "movieCard__bottom--reviews--active"
                  : "movieCard__bottom--reviews--inactive"
              }
            />
            <AiFillStar
              className={
                data.rating >= 8
                  ? "movieCard__bottom--reviews--active"
                  : "movieCard__bottom--reviews--inactive"
              }
            />
            <AiFillStar
              className={
                data.rating >= 9
                  ? "movieCard__bottom--reviews--active"
                  : "movieCard__bottom--reviews--inactive"
              }
            />
            <p>{data.votes} REVIEWS</p>
          </div>
        </div>
      </div>
      <div className="movieCard__info">
        <h2>{data.name}</h2>
        <p>{data.runtime.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
