import { AiFillStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
  return (
    <>
      <AiFillStar
        className={
          rating >= 1
            ? "movieCard__bottom--reviews--active"
            : "movieCard__bottom--reviews--inactive"
        }
      />
      <AiFillStar
        className={
          rating >= 3
            ? "movieCard__bottom--reviews--active"
            : "movieCard__bottom--reviews--inactive"
        }
      />
      <AiFillStar
        className={
          rating >= 6
            ? "movieCard__bottom--reviews--active"
            : "movieCard__bottom--reviews--inactive"
        }
      />
      <AiFillStar
        className={
          rating >= 8
            ? "movieCard__bottom--reviews--active"
            : "movieCard__bottom--reviews--inactive"
        }
      />
      <AiFillStar
        className={
          rating >= 9
            ? "movieCard__bottom--reviews--active"
            : "movieCard__bottom--reviews--inactive"
        }
      />
    </>
  );
};

export default StarRating;
