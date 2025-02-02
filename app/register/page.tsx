import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Main from "./components";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Wrapper } from "@/layout/Wrapper/Wrapper";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/profile");

  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default Register;
