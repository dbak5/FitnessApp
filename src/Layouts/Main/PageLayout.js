import * as React from "react";
import Header from "../header/Header";
import PageContainer from "../../components/generic/containers/PageContainer";
import Footer from "../footer/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="page">
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
}
