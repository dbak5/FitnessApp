import * as React from "react";

export default function PBPage({ children }) {
  return (
    <div className="pbPage">
      <h1>PBS</h1>
      {children}
    </div>
  );
}
