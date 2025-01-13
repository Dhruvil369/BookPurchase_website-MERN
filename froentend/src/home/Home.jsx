import Navbar from "../component/Navbar"
import Banner from "../component/Banner"
import Footer from "../component/Footer"
import Freebook from "../component/Freebook"

export default function Home() {
  return (
   <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
   </div>
   </>
  )
}
