
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"
import Email from "@/components/Email"
import Features from "@/components/Features"
import Features3 from "@/components/Features3"
import Features4 from "@/components/Features4"
import Header from "@/components/Header";

export default function about(){
    return(
        <main>
            <Banner/>
            <Navbar/>
            <Header/>
            <Features3></Features3>
            <Features4></Features4>
            <Features></Features>
            <Email/>
            <Footer/>

        </main>

    )
  }