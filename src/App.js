import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import PageLayout from "./layouts/main/PageLayout";
import Links from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <PageLayout className="App">
        <Links />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
