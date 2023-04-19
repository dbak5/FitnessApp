import * as React from "react";
import AppBar from "../header/Header";
import PageContainer from "../../components/containers/PageContainer";
import Footer from "../footer/Footer";

export default function PageLayout({ children }) {
  return (
    <div>
      <AppBar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}
