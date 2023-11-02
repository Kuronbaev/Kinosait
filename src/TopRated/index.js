import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../API";
import axios from "axios";
import Movie from "../Movie";

const TopRated = () => {
  const [torate, setTorate] = useState([]);
  const [page, setPage] = useState(1);
  const [language, setLanguae] = useState("en");
  function getLanguage() {
    setLanguae("ru");
  }

  function handPage() {
    setPage(page + 1);
  }

  function landPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const getToprate = (API_KEY, page, language) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${language}-US&page=${page}`
    ).then((res) => {
      setTorate(res.data.results);
    });
  };
  useEffect(() => {
    setTimeout(() => {
      getToprate(API_KEY, page, language);
    });
  }, [page, language]);
  console.log(torate);
  return (
    <div id="toprate">
      <div className="container">
        <select onChange={() => getLanguage()} className="sel">
          {" "}
          <option onChange={() => setLanguae("en")}>en</option>
          <option onChange={() => setLanguae("ru")}>ru</option>
        </select>
        <button onClick={() => handPage()} className="next">
          next
        </button>
        <button onClick={() => landPage()} className="next">
          Prev
        </button>
        <h2 className="hh">{page}</h2>

        <div className="toprate">
          {torate.map((el) => (
            <Movie el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
