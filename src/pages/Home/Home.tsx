import React from "react";
import { Carousel } from "../../components/Carousel";
import { MovieList } from "../../components/MovieList";
import { TheaterMenu } from "../../components/TheaterMenu";

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <MovieList />
      <TheaterMenu />
    </div>
  );
};

export default Home;
