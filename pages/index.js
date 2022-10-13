import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs' 
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {useState} from 'react'
// import TimelineImages from '../components/SliderCount'
import CustomSlider from '../components/CustomSlider'


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
            <h1 className='text-xl font-customFont dark:text-white'>Samuel Duval</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl  dark:text-white'/>
              </li>
              <li>
                <a className ="bg-gradient-to-r from-cyan-400 to-cyan-900 text-white px-4 py-2 rounded-md ml-8" href="#"> Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 pt-0'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Samuel Duval</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Human | Political Scientist | Software Engineer</h3>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10'>
              <div className='position: static'>
                  <CustomSlider />
              </div>            
            </div>

            <p className ='text-md py-5 leading-8 text-gray-800 dark:text-white'>
              My life passion is to seek a better understanding of nature, from physical phenomena to human societies.
              Somewhere inbetween exists technology which fascinates me. I love to develop software systems and have experience 
              with Javascript, Node, React, Vue, and a growing understanding of data structures and algorithms. 
            </p>
          </div>
          <div className='text-3xl flex justify-center gap-7 dark:text-white'>
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
        </section>
      </main>
    </div>
  )
}
