import React from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const ActorDetails = () => {
  const [person, setPerson] = useState({});
  const { personId } = useParams();

  const getPerson = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`
    ).then((res) => {
      setPerson(res.data);
      <div></div>;
    });
  };
  useEffect(() => {
    getPerson(API_KEY);
  }, [personId]);
  console.log(person);

  return (
    <div id="person ">
      <div className="container">
        <div className="person  flex item-center gap-10">
          <div className="imf flex justify-center flex-col w-[500px]">
            <img
              className=" w-[300px] h-[450px] rounded-xl"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
              alt=""
            />
            <div className="personname">
              <h1>Famous for</h1>
              <h2>{person.known_for_department}</h2>
              <h1>Gender</h1>
              <h2>{person.gender === 1 ? "Woman" : "Man"}</h2>
              <h1>Birthday</h1>
              <h2>{person.birthday}</h2>
              <h1>Place of birth</h1>
              <h1>{person.place_of_birth}</h1>
              <h1>Also known as</h1>
              <h2 className="flex items-center flex-col justify-center gap-2">
                {person.also_known_as}
              </h2>
            </div>
          </div>
          <div className="imf-text">
            <h1 className=" text-3xl font-semibold mb-5">{person.name}</h1>

            <h3 className=" text-2xl mb-5 tracking-normal font-medium">
              Biography
            </h3>
            <p className="text-[15px]">{person.biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
