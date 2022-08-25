import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Form() {
  const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const handleOnChange = (e) => {
    if (e.target.id === "emailInput") {
      setNewUser((state) => ({
        ...state,
        email: e.target.value,
      }));
    } else if (e.target.id === "nombre") {
      setNewUser((state) => ({
        ...state,
        nombre: e.target.value,
      }));
    } else {
      setNewUser((state) => ({
        ...state,
        contraseña: e.target.value,
      }));
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(newUser, "NEW USER");
  };

  return (
    <div className="container px-4 py-5 my-5 d-grid gap-2 bg-dark">
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label text-warning">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            aria-describedby="nameHelp"
            onChange={(e) => handleOnChange(e)}
          />
          <div id="nameHelp" className="form-text">
            Ingresa tu nombre completo.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label text-warning">
            Direccion Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            onChange={(e) => handleOnChange(e)}
          />
          <div id="emailHelp" className="form-text">
            No compartiremos tu email con nadie.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label text-warning">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseña"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handelSubmit(e)}
        >
          Enviar
        </button>
      </form>
      <Link to="/">
        <button className="btn btn-dark">Home</button>
      </Link>
    </div>
  );
}
