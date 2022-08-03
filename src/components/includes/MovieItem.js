import React from 'react'

function MovieItem(props) {
  console.log(props);
  return (
    <li>
      <a href="/">
      <img src={`https://image.tmdb.org/t/p/w342${props.movies.poster_path}`} alt={props.movies.title}/>
        <p>
          {props.movies.title}
        </p>
      </a>
    </li>
  )
}

export default MovieItem