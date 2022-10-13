import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  handleClick(movie) {
    this.props.addMovieFavorite(movie);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            /* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
            this.props.movies.map((movie) => {
              return (
                <li>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button
                    onClick={() =>
                      this.handleClick({ id: movie.imdbID, Title: movie.Title })
                    }
                  >
                    ADD
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

//selecciona del estado global la prop que necesitas
const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded,
  };
};

// despacha todas las acciones que necesita el componente, que busque pelis y luego que las ponga en favoritos
const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (title) => {
      dispatch(getMovies(title));
    },
    addMovieFavorite: (movie) => {
      dispatch(addMovieFavorite(movie));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

// escribo en input el nombre de la pelicula, se guarda en el estado local
//hago click =>
//1. que se despache la action que busca peliculas
//2. le paso por parametro el estado local del input

//tengo que mandar movies a prpops para poder utilizar con el mapstatetoprops
//toca mapearlo y por cada pelicula 1 div para la pelicula
// 1. titulo
// 2.boton
// 3.link
