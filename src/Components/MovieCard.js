import React from "react";
import "../CSS/movieCard.css";
import { IoMdHeart } from "react-icons/io";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import { movieRate } from "../Utils/functions";

const MovieCard = ({ data }) => {
  const clicked = () => {
    console.log(data.id);
  };

  const megusteado = (e) => {
    e.preventDefault();
    console.log("Megusteado");
  };

  return (
    <div className="movieCardContainer">
      <Link
        to={`/movie/${data.id}`}
        state={data}
        style={{ textDecoration: "none" }}
      >
        <div
          className="movieCard"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(25,25,38,0.00001) 42.31%, #191926 87.5%), url(${data.poster})`,
            backgroundSize: "cover",
          }}
          onClick={clicked}
        >
          <section className="movieCard__top">
            <div className="movieCard__top--rate">{movieRate(data.rate)}</div>
            <button onClick={megusteado}>
              <IoMdHeart className="movieCard__top--icon" value={false} />
            </button>
          </section>
          <section className="movieCard__bottom">
            <p className="movieCard__bottom--genre">{data.genre}</p>
            <div className="movieCard__bottom--reviews">
              <StarRating rating={data.rating} />
              <p>{data.votes} REVIEWS</p>
            </div>
          </section>
        </div>
        <section className="movieCard__info">
          <h2>{data.name}</h2>
          <p>{data.runtime.toUpperCase()}</p>
        </section>
      </Link>
    </div>
  );
};

export default MovieCard;
export { movieRate };
