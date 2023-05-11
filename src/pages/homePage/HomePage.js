import React from "react";

export default function HomePage({ children }) {
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      {children}
    </div>
  );
}
