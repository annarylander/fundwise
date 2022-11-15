import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops...</h1>
          <p className="py-6">Something went wrong</p>
          <Link to="/">
            <button className="btn btn-success">Go back to startpage</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
