import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 


const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));


export default store;


// el middleware es el que esta en el medio y se va a encargar de llamar a la API y cuando tenga la respuesta se lo va a dar al reducer.
//recordar que el reducer directamente no puede hacer esto porque debe ser una funcion pura.