import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Wrapper } from "@/layout/Wrapper/Wrapper";
import React from "react";
import { MainRules } from "./components/MainRules";

const Rules = () => {
  return (
    <Wrapper>
      <Header />
      <MainRules />
      <Footer />
    </Wrapper>
  );
};

export default Rules;
