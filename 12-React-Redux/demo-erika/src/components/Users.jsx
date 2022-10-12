import React from "react";
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';
import User from "./User";


class Users extends React.Component {
    constructor (props) {
        super (props) 
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
             <>
                <h1> Soy el componente Users </h1>
                {
                    this.props.users.map(user => {
                        return(
                        <User 
                            name={user.name}
                            id={user.id}
                            username={user.username}
                            key={user.id}
                        />
                    )})
                }

             </>
         ) 
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers:()=>{dispatch(getUsers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

//este componente va a ser una cajita que va a hacer un dispatch de una action que va a modificar el estado global. 

//global = { contador : 0,
            //   users: []}