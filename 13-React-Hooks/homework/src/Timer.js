import React, { useState, useEffect, useRef } from "react";
import "../src/Timer.css";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState("contador");
  const myRef = useRef(null);

  const toggle = () => {
    setActivo(!activo);
  };

  const reset = () => {
    setSegundos(0);
    setActivo(false);
  };

  const cambioTipo = () => {
    setTipo(tipo === "Contador" ? "Cuenta regresiva" : "Contador");
  };

  const agregaSegundos = () => {
    setSegundos(myRef.current.value);
  };

  useEffect(() => {
    let interval = null;
    if (activo && tipo === "Contador") {
      interval = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    }

    if (activo && tipo === "Cuenta regresiva") {
      interval = setInterval(() => {
        segundos >= 0 && setSegundos((segundos) => segundos - 1);
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === "Contador") {
      clearInterval(interval);
    }

    if (segundos === 0 && tipo === "Cuenta regresiva") {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [activo, segundos, tipo]);

  return (
    <div className="app">
      <div className="time">{segundos}</div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button className="button-secondary" onClick={reset}>
          {" "}
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>

      {tipo === "Cuenta Regresiva" && (
        <input
          onChange={agregaSegundos}
          type="number"
          placeholder="Ingresa Segundos"
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Timer;
