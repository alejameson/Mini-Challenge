import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 d-grid gap-2 d-md-flex justify-content-md-center">
        <Link to="/table"><button className="btn btn-dark">Table</button></Link>
        <Link to="/form"><button className="btn btn-dark">Form</button></Link>
      </div>
    </div>
  );
}
