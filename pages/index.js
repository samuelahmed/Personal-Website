import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill, BsPersonLinesFill} from 'react-icons/bs' 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {useState} from 'react'
// import TimelineImages from '../components/SliderCount'
import CustomSlider from '../components/CustomSlider'
import { Tooltip, Button } from 'flowbite-react'
// import CustomImage from '../components/CustomImage'



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
            <h1 className='text-xl font-customFont dark:text-white'>
              {/* Samuel Duval */}
              </h1>
            <ul className='flex items-center'>
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
              <li>
                {/* <a className ="bg-gradient-to-r from-cyan-400 to-cyan-900 text-white px-4 py-2 rounded-md ml-8" href="#"> Resume</a> */}
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 pt-0'>
            <h2 className='text-5xl py-2 text-sky-800 font-medium dark:text-sky-400'>Samuel Duval</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Software Developer</h3>
            <div className='relative mx-auto bg-gradient-to-b from-sky-800 dark:from-sky-400 rounded-full w-80 h-150 mt-20 mb-10'>
              {/* <CustomImage /> */}
              <div className=''>
                  <CustomSlider />
              </div>            
            </div>

            <p className ='text-md py-5 leading-8 text-gray-800 dark:text-white'>
              My lifes passion is to seek a better understanding of nature, from physical phenomena to human societies.
              Somewhere inbetween exists technology which fascinates me. I studied social sciences for a BA and MSc, helped
               tech startups succeed as sales engineer, and advised businesses on operations. I discovered my passion for building software systems and have
              experience with Javascript, Node, React, Vue, and an ever growing understanding of data structures and algorithms. 
            </p>
          </div>
            {/* <a href="https://www.linkedin.com/in/samuel-duval/">
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
            </Tooltip> */}
        </section>
      </main>
    </div>
  )
}
