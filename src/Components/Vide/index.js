import React from "react";
import { API_KEY } from "../../API";
import axios from "axios";
import { useEffect, useState } from "react";

const Vide = ({ movieId }) => {
  const [home, setHome] = useState([]);
  function getHome(key, movieId) {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setHome(res.data.results);
    });
  }
  console.log(home.map((el) => el.key).slice(0, 4));
  useEffect(() => {
    getHome(API_KEY, movieId);
  }, [movieId]);
  return (
    <div id="video">
      <div className="container">
        <div className="video pb-20 flex flex-wrap items-center justify-center gap-5">
          {home
            .map((el) => (
              <div className="mb-5">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <h1 className="text-2xl mt-2">{el.name}</h1>
              </div>
            ))
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default Vide;
