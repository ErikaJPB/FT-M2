import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, action.payload],
      };

    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
