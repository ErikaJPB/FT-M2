export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
//buena practica guardar estas constantes en un archivo que se llame action-types y se pueden importar. El archivo que este en la misma carpeta

const apiKey = "38d4407c";

//lo ideal seria que recibiera un id para favorito, asi no tiene una cantidad de pelis el usuario

export const addMovieFavorite = (title) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: title,
  };
};

export const getMovies = (title) => {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_MOVIES,
          payload: data,
        })
      );
  };
};

export const getMovieDetail = (idMovie) => {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: data,
        })
      );
  };
};

export const removeMovieFavorite = (id) => {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id,
  };
};
