import React from "react";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>PROGRAM</h1>
      <p>Table with a program name input.</p>
      <p>Attributes for a program: length of time, days a week, start date</p>
      <p>
        Select start date and program automatically sets out program in calendar
      </p>
      {children}
    </div>
  );
}
