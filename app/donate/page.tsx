import Header from "@/layout/Header";
import { Wrapper } from "@/layout/Wrapper/Wrapper";
import DonateMain from "@/components/DonateMain";
import Footer from "@/layout/Footer";



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