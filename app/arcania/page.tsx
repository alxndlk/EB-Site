"use client";

import { Wrapper } from "@/layout/Wrapper/Wrapper";
import { Header } from "@/layout/Header/Header";
import Main from "./components/Main";
import Footer from "@/layout/Footer";

export default function Arcania() {
  return (
    <Wrapper>
      <Header/>
      <Main />
      <Footer />
    </Wrapper>
  );
}
