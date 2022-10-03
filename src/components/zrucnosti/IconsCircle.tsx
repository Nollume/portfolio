import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import vite from '../../assets/icons/vitejs.svg'
import html from '../../assets/icons/icons8-html-5-48.png'
import cssIcon from '../../assets/icons/icons8-css3-48.png'
import javaScript from '../../assets/icons/icons8-javascript-48.png'
import vueJs from '../../assets/icons/icons8-vue-js-48.png'
import react from '../../assets/icons/icons8-react-100.png'
import jquery from '../../assets/icons/icons8-jquery-50.png'
import typeScript from '../../assets/icons/icons8-typescript-48.png'
import tailwind from '../../assets/icons/icons8-tailwind-css-48.png'
import npm from '../../assets/icons/icons8-npm-48.png'
import sass from '../../assets/icons/icons8-sass-48.png'
import git from '../../assets/icons/icons8-git-48.png'
import firebase from '../../assets/icons/icons8-google-firebase-console-48.png'
import gitHub from '../../assets/icons/icons8-github-48.png'
import VScode from '../../assets/icons/icons8-visual-studio-code-2019-48.png'
import webpack from '../../assets/icons/icons8-webpack-48.png'

import YarnIcon from '../icons/YarnIcon'
import PiniaIcon from '../icons/PiniaIcon'

type Props = {}

const IconsCircle = (props: Props) => {
	useEffect(() => {
		Aos.init({ duration: 400 })
	}, [])

	return (
		<div className="small:row-start-2 small:col-span-4 grid grid-cols-3 gap-1 select-none sm:grid-cols-4 lg:grid-cols-5 xl:row-span-2 xl:grid-cols-6 ">
			<div className="logos">
				<p className="">HTML</p>
				<img className="icon" src={html} alt="html logo" />
				<p className=" tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos">
				<p>CSS</p>
				<img className="icon" src={cssIcon} alt="cssIcon logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos">
				<p>JavaScript</p>
				<img className="icon" src={javaScript} alt="javaScript logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
			<div className="logos">
				<p>VUE.js</p>
				<img className="icon" src={vueJs} alt="vueJs logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
			<div className="logos ">
				<p>React</p>
				<img className=" icon w-12 h-auto" src={react} alt="react logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||</span>
					<span className="opacity-50">|||</span>
				</p>
			</div>
			<div className="logos ">
				<p>jQuery</p>
				<img className="icon" src={jquery} alt="jquery logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||</span>
					<span className="opacity-50">|||</span>
				</p>
			</div>
			<div className="logos ">
				<p>Tailwind</p>
				<img className="icon" src={tailwind} alt="tailwind logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos ">
				<p>Sass(Scss)</p>
				<img className="icon" src={sass} alt="sass logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>

			<div className="logos">
				<p>TypeScript</p>
				<img className="icon" src={typeScript} alt="typeScript logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||</span>
					<span className="opacity-50">|||</span>
				</p>
			</div>

			<div className="logos">
				<p>Webpack</p>
				<img className="icon" src={webpack} alt="webpack logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||</span>
					<span className="opacity-50">|||</span>
				</p>
			</div>

			<div className="logos">
				<p>Npm</p>
				<img className="icon" src={npm} alt="npm logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos ">
				<p>Yarn</p>
				<YarnIcon />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos ">
				<p>Git</p>
				<img className="icon" src={git} alt="git logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
			<div className="logos ">
				<p>GitHub</p>
				<img className="icon" src={gitHub} alt="gitHub logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
			<div className="logos  ">
				<p>VS code</p>
				<img className="icon" src={VScode} alt="visual studio code logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||||</span>
					<span className="opacity-50">|</span>
				</p>
			</div>
			<div className="logos ">
				<p>Firebase</p>
				<img className="icon" src={firebase} alt="firebase logo" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">||</span>
					<span className="opacity-50">|||</span>
				</p>
			</div>
			<div className="logos ">
				<p>Pinia</p>
				<PiniaIcon />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
			<div className="logos ">
				<p>Vite</p>
				<img className="icon" src={vite} alt="" />
				<p className="tracking-widest font-bold  ">
					<span className="text-my-accent opacity-100">|||</span>
					<span className="opacity-50">||</span>
				</p>
			</div>
		</div>
	)
}

export default IconsCircle
