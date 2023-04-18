import logo from "../Assets/Images/logo.svg";
import "../Assets/Styles/App.css";
import Page from "../Layouts/Main/Page";

function App() {
  return (
    <Page className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Page>
  );
}

export default App;
