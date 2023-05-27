import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layouts/main/PageLayout";
import Links from "./Routes";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Links />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
