import React from "react";
import Card from "./Card";

// export default function Cards(props) {

//   //props es un {}
//   //props contiene cities
//   //cities es un [] de {}
//   // acá va tu código
//   // tip, podés usar un map

//   return (
//      <div>
//       {
//     props.cities && props.cities.map(city => (
//       <Card
//       key={city.id}
//       max={city.main.temp_max}
//       min={city.main.temp_min}
//       name={city.name}
//       img={city.weather[0].icon}
//       onClose={() => alert(city.name)}
//       />
//     ))
//     }
//     </div>
// )
// };

class Cards extends React.Component {
  render() {
    let { cities } = this.props;
    return (
      <div>
        {cities &&
          cities.map((city) => (
            <Card
              key={city.id}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
          ))}
      </div>
    );
  }
}

export default Cards;
