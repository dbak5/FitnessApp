import * as React from "react";
import AppBar from "../Header/AppBar";
import PageContainer from "../../Components/Containers/PageContainer";
import Footer from "../Footer/Footer";

export default function Page() {
  return (
    <div>
      <AppBar />
      <PageContainer />
      <Footer />
    </div>
  );
}
