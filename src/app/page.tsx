import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import OurClients from "@/components/Sliders/OurClients"
import Quality from "@/components/Quality"
import Testimonial from "@/components/Sliders/Testimonial/Testimonial"
import Prices from "@/components/Prices/Prices"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <OurClients/>
      <Quality/>
      <Testimonial/>
      <Prices/>
      <Contact/>
      <Footer/>
    </main>
  )
}
