import React from "react";
import "./style.css"

export function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
};
