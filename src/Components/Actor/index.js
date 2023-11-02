import React from 'react'
import { API_KEY } from '../../API'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Swiper from '../Swiper'

const Actor = ({ movieId }) => {
	const [hime, setHiem] = useState([])
	function getHime(key, movieId) {
		axios(
			`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
		).then(res => {
			setHiem(res.data.cast)
		})
	}
	// console.log(
	//   hime.map((el) => {
	//     return el.name;
	//   })
	// );
	useEffect(() => {
		getHime(API_KEY, movieId)
	}, [movieId])
	return (
		<div id='actor'>
			<div className='container'>
				<div className='actor'>
					<Swiper hime={hime} />
					{/* <div className="slide-act">
            {hime.map((el) => {
              return (
                <div className="act">
                  <img
                  className="imageee"
                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                    alt=""
                  />
                  <h2>{el.name}</h2>
                </div>
              );
            })}
          </div> */}
				</div>
			</div>
		</div>
	)
}

export default Actor
