import Navbar from "@/components/Navbar";
import Hero from "@/components/Herobox";
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import Listing from "@/components/Listings";
import Listing2 from "@/components/Listing2";
import Features2 from "@/components/Features2"
import Banner from "@/components/Banner"
import Email from "@/components/Email"



export default function Home(){
  return(

      <main>
       <Banner/>
       <Navbar/>
       <Hero></Hero>
       <Features></Features>
       <Listing></Listing>
       <Listing2></Listing2>
       <Email></Email>
       <Features2></Features2>
       <Footer></Footer>
       

      </main>

  )
}