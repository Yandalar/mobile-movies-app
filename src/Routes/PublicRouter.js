import { Route, Routes } from "react-router-dom";
import MovieComponent from "../Components/MovieComponent";
import FavouriteComponent from "../Components/FavouriteComponent";
import Home from "../Pages/Home";

const PublicRouter = () => {
  return (
    <Routes>
      <Route>
        <Route exact match path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieComponent />} />
        <Route path="/favs" element={<FavouriteComponent />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
