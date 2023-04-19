import "../assets/styles/App.css";
import PageLayout from "../layouts/main/PageLayout";
import Links from "../Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <PageLayout className="App">
      <Links />
    </PageLayout>
  );
}

export default App;
