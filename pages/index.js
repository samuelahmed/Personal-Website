import Head from 'next/head'
import {BsFillMoonStarsFill, BsPersonLinesFill} from 'react-icons/bs' 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {useState} from 'react'
import CustomSlider from '../components/CustomSlider'
import { Tooltip } from 'flowbite-react'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Samuel Duval</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white-100 px-10 dark:bg-gray-900'>
        <section className="full-screen">
          <nav className='py-10 flex justify-between'>
            {/* NOTE: The h1 below is pushing nav bar items to right (as desired). It should be removed and replaced with proper styling */}
            <h1 className=''></h1>
            <div className='text-3xl flex justify-center gap-7 dark:text-white'>
              <Tooltip content="Lights">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl  dark:text-white'/>
              </Tooltip>
              <a href="https://www.linkedin.com/in/samuel-duval/">
                <Tooltip content="LinkedIn">
                  <AiFillLinkedin data-tooltip-target="tooltip-default" />
                </Tooltip>
              </a>
              <a href="https://www.github.com/samuelahmed/">
                <Tooltip content="Github">
                  <AiFillGithub />
                </Tooltip>
              </a>
              <Tooltip content="Resume">
                <BsPersonLinesFill />
              </Tooltip>
            </div>
          </nav>
          <div className='text-center p-10 pt-0'>
            <h2 className='text-5xl py-2 text-sky-800 font-medium dark:text-sky-400'>
              Samuel Duval
            </h2>
            <h3 className='text-2xl py-2 dark:text-white'>
              Software Developer
            </h3>
            <div className='mb-10'>
                  <CustomSlider />
            </div>
            <p className ='text-md py-5 leading-8 text-gray-800 dark:text-white'>
              My lifes passion is to seek a better understanding of nature, from physical phenomena to human societies.
              Somewhere inbetween exists technology which fascinates me. I studied social sciences for a BA and MSc, helped
               tech startups succeed as sales engineer, and advised businesses on operations. I discovered my passion for building software systems and have
              experience with Javascript, Node, React, Vue, and an ever growing understanding of data structures and algorithms. 
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
