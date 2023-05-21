import React from "react";
import CreateProgramForm from "./CreateProgramForm";

export default function CreateProgramPage({ children }) {
  return (
    <div className="createProgramPage">
      <h1>CREATE PROGRAM</h1>
      <CreateProgramForm />
      {children}
    </div>
  );
}
