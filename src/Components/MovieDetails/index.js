import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import "./movie.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { SlFolder } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import Modal from "../../Modal";
import { AiOutlineFullscreen } from "react-icons/ai";
import Actor from "../Actor";
import Vide from "../Vide";

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  function getLoading(key) {
    setLoading(key);
  }
  useEffect(() => {
    setTimeout(() => {
      getLoading(true);
    }, 2000);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { movieId } = useParams();
  const [mouse, setMouse] = useState(false);
  const [details, setDetails] = useState({});
  const [showFullText, setShowFullText] = useState(false);

  const overview = details.overview || "";
  const words = overview.split(" ");
  const truncatedText = showFullText ? overview : words.slice(0, 40).join(" ");
  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  function getMouse() {
    setMouse(!mouse);
  }
  function getMouses() {
    setMouse(!mouse);
  }

  function getParams(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    ).then((res) => {
      setDetails(res.data);
    });
  }
  useEffect(() => {
    getParams(API_KEY);
  }, []);
  return loading ? (
    <div className="mam">
      <div
        className="blogs bg-blend-color"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path})`,
        }}
      >
        <div
          className="py-[70px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
          }}
        >
          <div className="container">
            <div className="blog">
              <div
                onMouseOut={() => getMouses()}
                onMouseOver={() => getMouse()}
                className="images relative"
                style={{}}
              >
                <div
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    transition: "all .4s",
                    backdropFilter: "blur(10px)",
                  }}
                  className={`text-3xl absolute cursor-pointer top-0 left-0 w-full rounded-[12px] h-full flex items-center justify-center ${
                    mouse ? "bg-[#00000080]" : "bg-none"
                  } text-white
              ${mouse ? " opacity-[1]" : " opacity-0"}
            `}
                >
                  <AiOutlineFullscreen className="w-[30px] mr-5 font-thin" />
                  Rashirit
                </div>
                {details.poster_path === "" ? (
                  <h1>hello</h1>
                ) : (
                  <img
                    className="image"
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.poster_path}`}
                    alt=""
                  />
                )}
              </div>
              <div className="blog-txt">
                <h1 className="ha">
                  {details.original_title}
                  <span>
                    ({details.release_date && details.release_date.slice(0, 4)})
                  </span>
                </h1>
                <div className="blog-date">
                  <div className="rr"></div>
                  <h2>
                    {details.release_date && details.release_date.slice()}
                  </h2>

                  {details.genres && details.genres.length > 0 && (
                    <li className="lili">
                      {details.genres.map((el) => el.name).join(", ")}
                    </li>
                  )}
                  <li>
                    {Math.floor(details.runtime / 60)}h{" "}
                    {Math.round(details.runtime % 60)}m
                  </li>
                </div>
                <div className="blog-rate flex items-center mt-3 gap-5">
                  <div className="rate flex items-center justify-center w-[70px] h-[70px] rounded-[50%] border-solid border-[4px] border-green-500">
                    <h1 className=" hhh text-white">
                      {Math.round(details.vote_average * 10)}%
                    </h1>
                  </div>
                  <div className="route flex items-center text-center justify-center  bg-[#032541] w- [45px] h-[45px]  rounded-[30px] ">
                    <AiTwotoneHeart
                      className="hello w-[17px] h-[17px] "
                      color="white"
                    />
                  </div>
                  <div className="route flex items-center text-center justify-center  bg-[#032541] w-[45px] h-[45px]  rounded-[30px] ">
                    <BsListUl
                      className="hello w-[17px] h-[17px] "
                      color="white"
                    />
                  </div>
                  <div className="route flex items-center text-center justify-center  bg-[#032541] w-[45px] h-[45px]  rounded-[30px] ">
                    <SlFolder
                      className="hello w-[17px] h-[17px] "
                      color="white"
                    />
                  </div>
                  <div className="route flex items-center text-center justify-center  bg-[#032541] w-[45px] h-[45px]  rounded-[30px] ">
                    <AiFillStar
                      className="hello w-[17px] h-[17px] "
                      color="white"
                    />
                  </div>
                </div>
                <div className="i flex items-center">
                  <i className="text-white font-thin mt-4 mb-4">
                    {details.tagline}
                  </i>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-white text-2xl">Review</span>
                  <p className="w-[1000px] param text-white">
                    {truncatedText}
                    {words.length > 40 && (
                      <button
                        className="font-bold ml-1"
                        onClick={toggleFullText}
                      >
                        {showFullText ? "Close" : "..."}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsModalOpen(false)}
            style={{
              visibility: isModalOpen ? "visible" : "hidden",
            }}
            className="body flex items-center z-99 w-[100%] h-[100%]  fixed bg-[#00000080]  top-0 left-0 "
          ></div>
          <Modal
            isModalOpen={isModalOpen}
            details={details}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
      <div className="container">
        <Actor movieId={movieId} />
      </div>
      <div className="container">
        <Vide movieId={movieId} />
      </div>
    </div>
  ) : (
    <div className="loaderr"></div>
  );
};

export default MovieDetails;
