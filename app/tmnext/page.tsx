import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import { Wrapper } from "@/layout/Wrapper/Wrapper";
import { Main } from "./components/Main";

const Register = async () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default Register;
