import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layouts/main/PageLayout";
import Links from "./Routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/styles/Theme";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("Default Title");
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  const changeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PageLayout>
          <Links />
        </PageLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
