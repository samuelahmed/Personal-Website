import Head from 'next/head'
import {BsFillMoonStarsFill, BsPersonLinesFill} from 'react-icons/bs' 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import CustomSlider from '../components/CustomSlider'
import { Tooltip } from 'flowbite-react'
import PdfModal from '../components/PdfModal'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setDarkMode(true)
    }
    else {  
      setDarkMode(false)
    }
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>

      <Head>
        <title>Samuel Duval</title>
        <meta 
          name="Samuel Duval's personal website" 
          content="On the restless quest to achieve the impossible" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen min-w-screen bg-white-100 px-10 dark:bg-gray-900'>
        <section className="full-screen">

          <nav className='py-10 flex justify-between'>
            <h1 className='emptyDiv'></h1>
            <div className='text-3xl flex justify-center gap-7 dark:text-white'>
              <Tooltip content="Lights">
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className='cursor-pointer text-2xl  dark:text-white'
                />
              </Tooltip>
              <a href="https://www.linkedin.com/in/samuel-duval/" target="blank" rel="noopener noreferrer">
                <Tooltip content="LinkedIn">
                  <AiFillLinkedin data-tooltip-target="tooltip-default" />
                </Tooltip>
              </a>
              <a href="https://www.github.com/samuelahmed/" target="_blank" rel="noopener noreferrer">
                <Tooltip content="Github">
                  <AiFillGithub />
                </Tooltip>
              </a>
                <Tooltip content="Resume">
                  <PdfModal	/>
                </Tooltip>
            </div>
          </nav>

          <div className='mx-auto text-center'>
            <h2 className='text-5xl py-2 text-sky-800 font-medium dark:text-sky-400'>
              Samuel Duval
            </h2>
            <h3 className='text-2xl py-2 dark:text-white'>
              Software Developer
            </h3>
          </div>

          <div className='mx-auto pb-10 -mt-10'>
            <CustomSlider />
          </div>
          
          <div className='mx-auto text-center'>
            <p className ='mx-auto w-5/6 text-md py-5 leading-8 text-gray-800 dark:text-white'>
              I have always been passionate to seek a better understanding of nature, from physics to nation-states. 
              Somewhere in-between is technology which fascinates me. I studied political science and anthropology for a BA and MSc, 
              helped a tech startup scale as a sales engineer, and advised businesses to improve their operations. 
              Most recently I have been devoted to the craft of software engineering, having experience with Javascript, 
              Node, React, Vue, and an ever growing command of the fundamentals including data structures and algorithms.
            </p>
          </div>

        </section>
      </main>
    </div>
  )
}
