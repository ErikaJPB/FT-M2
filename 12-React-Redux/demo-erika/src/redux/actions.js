export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const GET_USERS = 'GET_USERS';

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}


export const getUsers= () => {
    return function (dispatch) {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:GET_USERS, payload:data}));
    };   
};
