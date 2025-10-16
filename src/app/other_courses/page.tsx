import Hero_English from '@/components/other_courses/Hero_English'
import Hero_Ecommerce from '@/components/other_courses/Hero_Ecommerce'
import Hero_Education from '@/components/other_courses/Hero_Education'
import Hero_Entrepreneurship from '@/components/other_courses/Hero_Entrepreneurship'
import Hero_Social from '@/components/other_courses/Hero_Social'

import Courses_English from '@/components/other_courses/Courses_English'
import Courses_Ecommerce from '@/components/other_courses/Courses_Ecommerce'
import Courses_Education from '@/components/other_courses/Courses_Education'
import Courses_Entrepreneurship from '@/components/other_courses/Courses_Entrepreneurship'
import Courses_Social from '@/components/other_courses/Courses_Social'


import Contact from '@/components/other_courses/Contact'
import Footer from '@/components/other_courses/Footer'
    
const page = () => {
  return (
    <>
      <Hero_English />
      <Courses_English />

      <Hero_Ecommerce />
      <Courses_Ecommerce />

      <Hero_Education />
      <Courses_Education />

      <Hero_Entrepreneurship />
      <Courses_Entrepreneurship />
      
      <Hero_Social />
      <Courses_Social />

      <Contact />
      <Footer />
    </>
  )
}

export default page