import Header from "@/layout/Header";
import { Wrapper } from "@/layout/Wrapper/Wrapper";
import Footer from "@/layout/Footer";
import DonateMain from "./components";



const Donate = () => {
    return (
      <Wrapper >
        <Header textColor="white"/>
        <DonateMain />
        <Footer />
      </Wrapper>
    )
}
  
  export default Donate;