import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layouts/main/PageLayout";
import Links from "./Routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/styles/Theme";

function App() {
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
