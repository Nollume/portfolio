import React from 'react'
import HomeList from '../components/HomeList'
import HomeTitles from '../components/HomeTitles'

import Aos from 'aos'
import 'aos/dist/aos.css'
//@ts-ignore
import CV from '../assets/CV/Životopis Dorotovič Okt2022.pdf'

import programming from '../assets/icons/undraw_programming_re_kg9v.svg'
import code from '../assets/icons/undraw_code.svg'
import chevrons from '../assets/icons/undraw_chevrons.svg'

import html from '../assets/icons/icons8-html-5-48.png'
import cssIcon from '../assets/icons/icons8-css3-48.png'
import javaScript from '../assets/icons/icons8-javascript-48.png'
import vueJs from '../assets/icons/icons8-vue-js-48.png'
import typeScript from '../assets/icons/icons8-typescript-48.png'
import Download from '../components/icons/Download'

type Props = {}

const Home = (props: Props) => {
	return (
		<section
			id="Domov"
			className="flex flex-col  z-10 min-h-screen pt-14 pb-4 overflow-hidden md:pt-20 md:min-h-max xl:min-h-screen "
		>
			<HomeTitles />
			<div className="relative flex flex-col justify-evenly flex-1 gap-4 my-4 md:block xl:flex xl:flex-row ">
				<div className="relative w-[90%] mx-auto small:w-4/5 md:w-[35rem] md:mx-0 md:-left-14 lg:w-[40rem] xl:w-[45rem] xl:left-10 twoxl:w-[50rem]">
					<img className="" src={programming} alt="programming" />
					<div className="w-6 opacity-fade small:block absolute top-1/2 right-10 -translate-y-1/2 rotate-[15deg] small:w-8 sm:w-10 md:right-24 md:w-12">
						<img className="rotate-[15deg]" src={html} alt="html" />
					</div>
					<div className="w-6 opacity-fade small:block absolute top-0 right-0  small:w-8 sm:w-10 md:w-12">
						<img className="rotate-45" src={cssIcon} alt="css" />
					</div>
					<div className="w-6 opacity-fade  small:block absolute top-1/4 left-full  small:w-8 sm:w-10 md:w-12">
						<img className="rotate-12" src={javaScript} alt="javaScript" />
					</div>
					<div className="w-6 opacity-fade small:block absolute bottom-0 left-20  xl:bottom-10 small:w-8 sm:w-10 md:w-12">
						<img className="-rotate-12" src={vueJs} alt="vue" />
					</div>
					<div className="w-6 opacity-fade small:block absolute top-[35%]  small:w-8 sm:w-10 md:w-12 md:left-28 md:-top-10 xl:top-[35%] xl:left-0">
						<img
							className="-rotate-[30deg]"
							src={typeScript}
							alt="typeScript"
						/>
					</div>
				</div>
				<article className="opacity-fade z-0 text-my-light dark:text-my-dark dark:bg-my-light/95 bg-my-bgDark/95 ml-8 mr-4 pb-4 rounded-md relative md:w-3/4 md:ml-auto md:-top-14 md:pb-0 lg:w-[65%] lg:mr-8 xl:top-0 xl:self-end">
					<HomeList />

					<a
						href={CV}
						download="Marek-Dorotovic-CV.pdf"
						className="flex items-center my-gradient hover:my-gradient-hover text-my-light font-bold p-2 rounded-md duration-300  cursor-pointer border border-my-dark absolute z-50 -left-4 bottom-0 translate-y-1/2
							md:bottom-full md:left-[unset] md:right-1/4 md:translate-x-1/2"
					>
						<Download /> Stiahnúť Životopis
					</a>

					<img
						className="absolute bottom-3 right-2 rotate-12 w-10 z-10 small:top-3"
						src={code}
						alt=""
					/>
				</article>
			</div>
			<a href="#Omne" className="self-center mt-8 xl:mt-14">
				<img src={chevrons} className="chevrons " alt="chevrons" />
			</a>
		</section>
	)
}

export default Home
