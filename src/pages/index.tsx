import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/component/Header";
import Herosection from "@/component/Herosection";
import Brands from '@/component/Brands'
import About from '@/component/About'
import Services from '@/component/Services'
import Footer from '@/component/Footer'
import Chooseus from '@/component/Chooseus'
import Contact from "@/component/Contact";
import Planning from "@/component/Planning";
import Testimonials from '@/component/Testimonials'
import Industries from "@/component/Industries";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <Header />
  <Herosection />
  <Brands />
  <About />
<Services />
<Chooseus />
<Testimonials />
<Planning />
<Industries />
<Contact />
<Footer />
   </>
  );
}
