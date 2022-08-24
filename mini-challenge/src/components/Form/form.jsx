import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Form() {
const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
    contraseña: "",
})
  return (
    <div className="container px-4 py-5 my-5 d-grid gap-2 bg-dark">
      <form class="">
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-warning">
            Nombre
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Ingresa tu nombre completo.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-warning">
            Direccion Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            No compartiremos tu email con nadie.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label text-warning">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
      <Link to="/"><button className="btn btn-dark">Home</button></Link>
    </div>
  );
}
