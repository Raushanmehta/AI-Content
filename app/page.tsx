'use client'
import CounterUser from "@/components/CounterUser";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <CounterUser/>
      <Feature/>
      <Pricing/>
      
      <Footer/>
    </div>
  );
}
