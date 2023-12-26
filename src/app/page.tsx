import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"

const Home = () => {
return (
<>

  <Head>
    <title>Home Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="flex items-center text-dark w-full min-h-screen">
  <div className='flex w-full items-start justify-between md:flex-col'>

    <div className="flex items-center justify-between w-full">
      <div className='w-1/2'>
        <Image src={profilePic} alt="CodeBucks" className='w-full h-auto' />
      </div>
      <div className='w-1/2'>
      <h1 className='text-dark dark:text-light sm:text-4xl md:text-7xl  text-xl	font-bold '>Turning Vision Into Reality With Code And Design.</h1>
                <p className='text-dark dark:text-light my-4 font-medium text-xl'>
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </p>
      </div>
    </div>
    </div>
  </main>

</>
)
}

export default Home
