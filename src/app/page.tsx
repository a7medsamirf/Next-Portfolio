import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'

const Home = () => {
return (
<>

  <Head>
    <title>Home Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>


  <main className="flex items-center text-dark w-full min-h-screen">
    <div className="flex items-center justify-between w-full">
      <div className='w-1/2'>
        <Image src={profilePic} alt="CodeBucks" className='w-full h-auto' />
      </div>
      <div className='w-1/2'>
        <AnimatedText  text="Turning Vision Into Reality With Code And Design." className='!text-6x1'/>

                <p className='my-4 text-base font-medium md:text-sm sm:!text-xs'>
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </p>
      </div>
    </div>

  </main>
</>
)
}

export default Home