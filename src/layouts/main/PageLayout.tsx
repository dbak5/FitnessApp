import { Header } from "../header/Header";
import { PageContainer } from "../../components/containers/PageContainer";
import { Footer } from "../footer/Footer";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Box>
  );
};
