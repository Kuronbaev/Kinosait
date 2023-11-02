import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ el }) => {
	return (
		<div className='box'>
			<Link to={`/movie/details/${el.id}`}>
				<img
					src={`https://themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
					alt=''
				/>
			</Link>
			<h3>{el.title}</h3>
			<h5>{el.release_date}</h5>
		</div>
	)
}

export default Movie
