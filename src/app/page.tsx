import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import OurClients from "@/components/Sliders/OurClients"
import Quality from "@/components/Quality"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <OurClients/>
      <Quality/>
    </main>
  )
}
