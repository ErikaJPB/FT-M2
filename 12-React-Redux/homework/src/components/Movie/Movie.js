
import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  
componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)
}

  render() {
    return ( // toda la info se saca del estado.. mapstatetoprops
    <div className="movie-detail">
    <h4>{this.props.movieDetail.Title}</h4>
    <p>{this.props.movieDetail.Year}</p>
    <img src={this.props.movieDetail.Poster} alt="Not found"/> 
    <p>{this.props.movieDetail.Plot}</p>
    </div>)
  }
}

//se saca la info del estado
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (movieId) => {
      dispatch(getMovieDetail(movieId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);


//useState() => Crea estados locales
//useEffect() => Maneja el ciclo de vida (primer parametro es un callback, segundo array de dependencias)
//useDispatch() => Dispara dispatch, remplaza el mapDispatchToProps
//useSelector() => reemplaza el mapToStateToProps

// useEffect(() => { 
//  // le digo que vaya a buscar el detalle de la peli cuando se monta -> componentDidMount
//   props.getMovieDetail(props.match.params.id)

// }, [props.match.params.id])// array de dependencias, cada vez que se hay cambio se va a ejecutar el use effect de nuevo y viene a remplazar el component did update, se le pasa de lo que depende la actualizacion
// //el id va a ir cambiando por eso se encarga de que cada vez que actualize mostrar el componente.



//Ejemplo pasando Movie a un componente funcional

// function Movie (props) {
//   const dispatch = useDispatch(); // mapDispatchToProps
//   const movieDetail = useSelector((state) => state.movieDetail); //mapStateToProps 
// //recibe el estado global y solo quiero el movie detail

// useEffect(()=> {
//   //le digo que vaya a buscar el detail de la peli->did mount
//   dispatch(getMovieDetail(props.match.params.id))
//   //si tuviera otra action que quisiera iria aca ej dispatch(asdasdasd)(asdsadasdas)

//   return () => { //la funcion que retorna remplaza el willunmount
//   dispatch(cleanDetail())}

// }, [dispatch, props.match.params.id]) // did update es el array



  
//     return ( 
//     <div className="movie-detail">
//     <h4>{movieDetail.Title}</h4>
//     <p>{movieDetail.Year}</p>
//     <img src={movieDetail.Poster} alt="Not found"/> 
//     <p>{movieDetail.Plot}</p>
//     </div>)
  
  
// }



// limpiar estado..

//clean detail
//action-> reducer le va a retornar (...state, movieDetail: {}) objeto vacio va a pisarle el estado / esto lo necesita cuando se desmonta el componente




// export default Movie;