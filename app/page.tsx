"use client";

import { Wrapper } from "@/layout/Wrapper/Wrapper";
import { Header } from "@/layout/Header/Header";
import Main from "@/layout/Main";
import Footer from "@/layout/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}
