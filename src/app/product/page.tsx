
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"
import Listings3 from "@/components/Listings3"
import Listing4 from "@/components/Listing4"
import Listing5 from "@/components/Listing5"
import Products from "@/components/Products"
import Filter from "@/components/Filter"
export default function Product(){
    return(
        <main>
            <Banner/>
            <Navbar/>
            
            <Products/>
            <Filter/>
            
            <Listings3/>
            <Listing5/>
            <Listing4/>
            <Footer/>
            </main>

)
}