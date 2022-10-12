const redux = require("redux");

const initialState={
    num: 0,
    visibility: true,
    name: "",
    amigos: [],
}

// El reducer es una funcion que recibe un estado al principio va a ser el initialState y cada vez que alguien lo llame le va a traer una action.
//El reducer te hace una copia del estado y lo retorna.. no lo modifica!

 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUMENTAR":
            return {
                ...state,
                num: state.num + 1,        
         };
         case "DECREMENTAR":
            return {
                ...state,
                num: state.num - 1,
            }      

        case "CAMBIAR_NOMBRE":
            return {
                ...state,
                name: action.payload,
            };
        
        case "AGREGAR_AMIGOS":
            return {
                ...state, 
                amigos:[...state.amigos, action.payload]      
            }

        case "BORRAR_AMIGO":
            return{
                ...state, 
                amigos: state.amigos.filter(amigo =>amigo.id !== action.payload)
            }

            default:
                return {...state}; //se puede retornar el state solo.. sin copia.
        }
    }

// no break en el switch porque tiene un return.


const store = redux.createStore(reducer);



//No vamos a estar escribiendo actions cada vez
// action creator: va a ser una impresora de acciones, son funciones que reciben parametro

const cambiarNombre = (name) => {
    return {type: "CAMBIAR_NOMBRE", payload: name };
}

console.log(cambiarNombre("Erika"));

const agregarAmigos = (amigo, id ) => {
    return {type:"AGREGAR_AMIGOS", payload:{name: amigo, id:id} };
}


const borrarAmigo = (id) => {
    return { type: "BORRAR_AMIGO",
    payload:id };

}




store.dispatch(agregarAmigos("Camilo", 1));

console.log(store.getState());



store.dispatch(agregarAmigos("Andrea", 2));

store.dispatch(agregarAmigos("Frank", 3));

store.dispatch(agregarAmigos("Diana", 4));

console.log(store.getState());

store.dispatch(borrarAmigo(4))

console.log(store.getState());