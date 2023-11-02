import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Swiper = ({ hime }) => {
  console.log(
    hime.map((el) => {
      return el.name;
    })
  );
  console.log("hello");
  var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className=" text-3xl mt-20"> Actors </h2>
      <Slider className="slidee" {...settings}>
        {hime
          .map((el) => {
            return (
              <div className="aca w-[138px] h-[220] flex items-center justify-center flex-col text-center  rounded-xl">
                <Link to={`/person/${el.id}`}>
                  <img
                    className=" outline-none"
                    src={
                      el.profile_path !== null
                        ? `https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU"
                    }
                    alt=""
                  />
                </Link>
                <h3>{el.name}</h3>
                <h4>{el.id}</h4>
              </div>
            );
          })
          .slice(0, 15)}
      </Slider>
    </div>
  );
};

export default Swiper;
