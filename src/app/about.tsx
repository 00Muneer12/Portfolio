import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div id='About'>
        <section className="text-blue-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
          alt="hero"
          src={require('../../../public/assets/Profile/aa.png')}
          width={300}
          height={500}
        />
        
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
          About Me
        </h1>
        <p className="mb-5 leading-relaxed">
        I apply the precision and problem-solving skills gained from healthcare to coding and software development. My focus is on creating efficient, user-friendly applications, and I enjoy leveraging my unique background to develop solutions that can enhance broader tech experiences.
        </p>
        <div className="flex justify-center">
            <Link href='/assets/CV/Muneer Cv.pdf'>
          <Button>
            Click Resume
          </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About
