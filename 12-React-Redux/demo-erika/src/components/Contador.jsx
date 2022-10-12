import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from "../redux/actions";

class Contador extends React.Component{
    constructor(props){
        super(props)
    }

        render(){
            return (
                <>
                <h1>{this.props.contador}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>

                </>
            )
        }
    }
    // el provider le da la opcion de recibir al estado global
    //recibe el estado global y retorna un objeto con una serie de propiedades que es paquete de variables que quiero mandar a las props

    //algo 1
    const mapStateToProps = (state) => { 
        return{
        contador: state.contador
        }
    }

    //algo 2
    const mapDispatchToProps = (dispatch) => {
        return {
            increment: () => {dispatch(increment())},
            decrement: () => {dispatch(decrement())}
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Contador);

    //el que no se vaya a usar se pone en null. Siempre tendran que ir los dos, pero si no se usa, ese va en null 