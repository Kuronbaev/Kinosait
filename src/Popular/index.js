import React from "react";
import { API_KEY } from "../API";
import { useState, useEffect } from "react";
import Movie from "../Movie";
import axios from "axios";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const [page, setPage] = useState(1);

  function handPage() {
    setPage(page + 1);
  }

  function landPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const getPopular = (key, page) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getPopular(API_KEY, page);
    }, 1000);
  }, [page]);

  console.log(popular);
  return (
    <div id="popular">
      <div className="container">
        <div className="popularr">
          <button onClick={() => handPage()} className="prev">
            Next{page}
          </button>
          <button className="prev" onClick={() => landPage()}>
            Prev{page - 1}
          </button>
          <div className="popular">
            {popular.length === 0 ? (
              <span class="loader"></span>
            ) : (
              popular.map((el) => <Movie el={el} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
