import { IoMdHeart } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router-dom";
import "../CSS/MovieComponent.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { movieRate } from "./MovieCard";
import StarRating from "./StarRating";

const MovieComponent = () => {
  const { state } = useLocation();
  const location = useLocation();

  const cast = state.actors.split(", ");
  const { id } = useParams();
  console.log(id);

  return (
    <div className="movieComponent">
      <section
        className="movieComponent__top"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 50%, #191926 92.15%), url(${state.poster})`,
          backgroundSize: "cover",
          borderRadius: "30px 30px 0px 0px",
        }}
      >
        <div className="movieComponent__top--header">
          <Link
            to={`/`}
            style={{ textDecoration: "none" }}
            className="movieComponent__top--header--link"
          >
            {"< Back"}
          </Link>

          <IoMdHeart className="movieComponent__top--header--icon" />
        </div>
        <div className="movieComponent__top--playIcon">
          <AiFillPlayCircle
            style={{ color: "#FFF", opacity: "0.75", scale: "7" }}
          />
        </div>
        <div className="movieComponent__top--movieTitle">
          <h3>{movieRate(state.rate)}</h3>
          <h1>{state.name}</h1>
        </div>
      </section>
      <section className="movieComponent__info">
        <div className="movieComponent__info--reviews">
          <p>{state.genre}</p>
          <div className="movieComponent__info--reviews--stars">
            <StarRating rating={state.rating} />
          </div>
        </div>
        <div className="movieComponent__info--description">
          <h3>Storyline</h3>
          <p>{state.plot}</p>
        </div>
      </section>
      <section className="movieComponent__bottom">
        <div className="movieComponent__bottom--header">
          <h3 className="movieComponent__bottom--header--cast">Cast</h3>
          <h3 className="movieComponent__bottom--header--seeAll">See All</h3>
        </div>
        <div className="movieComponent__bottom--cast">
          {cast.map((actor) => {
            return (
              <>
                <div className="movieComponent__bottom--cast--wrapper">
                  <img
                    src="https://media.sabes.cl/2021/12/IMG_1930-2-scaled-media-128x128.jpg.webp"
                    alt="actor picure"
                  />
                  <div className="movieComponent__bottom--cast--wrapper--name">
                    <p>{actor}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MovieComponent;
