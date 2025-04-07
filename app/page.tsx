'use client'
import CounterUser from "@/components/CounterUser";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <CounterUser/>
      <Feature/>
    </div>
  );
}
