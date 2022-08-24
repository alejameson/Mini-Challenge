import React from "react";
import { Link } from "react-router-dom";

export function Table() {
  const users = [
    {
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingieneria",
      hobbie: "Futbol",
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo electrico",
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacia",
      hobbie: "Acrobacia",
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomia",
    },
  ];
  return (
    <div className="container px-4 py-5 my-5 d-grid gap-2">
    <table className="table table-dark table-bordered table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td>{user.carrera}</td>
            <td>{user.hobbie}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Link to="/"><button className="btn btn-dark">Home</button></Link>
    </div>
  );
}
