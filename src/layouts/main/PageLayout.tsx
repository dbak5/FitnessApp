import { Header } from "../header/Header";
import { PageContainer } from "../../components/containers/PageContainer";
import { Footer } from "../footer/Footer";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};
