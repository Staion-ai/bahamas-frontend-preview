// src/app/page.tsx
import NavBar from '@/components/landing/NavBar'
import HeroSection from '@/components/landing/HeroSection'
import Join from '@/components/landing/Join'
import Separated from '@/components/landing/Separated'
import Steps from '@/components/landing/Steps'
import Future from '@/components/landing/Future'
import Carousel from '@/components/landing/Carousel'
import StepsTwo from '@/components/landing/StepsTwo'
import Faqs from '@/components/landing/Faqs'
import Journey from '@/components/landing/Journey'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Join />
      <Separated />
      <Steps />
      <Future />
      <Carousel />
      <StepsTwo />
      <Faqs />
      <Journey />
      <Footer />
    </>
  )
}
