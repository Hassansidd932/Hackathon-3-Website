
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"
import Email from "@/components/Email"
import Features from "@/components/Features"
import Listing6 from "@/components/Listing6";
import Productlist from "@/components/Productlist"
export default function item(){
    return(
  
        <main>
         <Banner/>
         <Navbar/>
         <Productlist/>
         <Listing6/>
         <Features/>
         <Email/>
         <Footer/>
         </main>

  )
}