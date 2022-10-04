import React from "react";

// export default function Card(props) {
//   // props es un {}
//   // max, min, name, img, onClose
//   // acá va tu código
//   const { max, min, name, img, onClose } = props;

//   return (
//     <div>
//       <button onClick= {onClose}>X</button>
//       <h2>{name}</h2>
//       <div>
//         <h5>Min</h5>
//         <p>{min}</p>
//         <h5>Max</h5>
//         <p>{max}</p>
//       </div>
//       <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
//     </div>
//   );
// }

class Card extends React.Component {
  render() {
    const { max, min, name, img, onClose } = this.props;
    return (
      <div>
        <button onClick={onClose}>X</button>
        <h2>{name}</h2>
        <div>
          <h5>Min</h5>
          <p>{min}</p>
          <h5>Max</h5>
          <p>{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      </div>
    );
  }
}

export default Card;