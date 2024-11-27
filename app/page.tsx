"use client";

import { Wrapper } from "@/layout/Wrapper/Wrapper";
import { Header } from "@/layout/Header/Header";
import Footer from "@/layout/Footer";
import Main from "@/components/HomePage";

export default function Home() {
  return (
    <Wrapper>
      <Header/>
      <Main />
      <Footer />
    </Wrapper>
  );
}
