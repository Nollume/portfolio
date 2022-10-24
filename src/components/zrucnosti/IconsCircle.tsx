import React, { useEffect, useRef } from 'react'
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
import nuxt from '../../assets/icons/colored-logo.svg'

import YarnIcon from '../icons/YarnIcon'
import PiniaIcon from '../icons/PiniaIcon'

type Props = {}

const IconsCircle = (props: Props) => {
	const cardContainer = useRef<HTMLDivElement>(null)
	useEffect(() => {
		Aos.init({ duration: 400 })
	}, [])

	const handleMouseMove = (e: React.MouseEvent) => {
		// @ts-ignore
		const cards = Array.from(cardContainer.current?.children)

		for (const card of cards) {
			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top
			// @ts-ignore
			card.style.setProperty('--mouse-x', `${x}px`)
			// @ts-ignore
			card.style.setProperty('--mouse-y', `${y}px`)
		}
	}

	return (
		<div
			ref={cardContainer}
			className=" cards"
			onMouseMove={(e: React.MouseEvent) => {
				handleMouseMove(e)
			}}
		>
			<div className="card">
				<div className="card-content">
					<p className="">HTML</p>
					<img className="icon" src={html} alt="html logo" />
					<p className=" tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-content">
					<p>CSS</p>
					<img className="icon" src={cssIcon} alt="cssIcon logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-content">
					<p>JavaScript</p>
					<img className="icon" src={javaScript} alt="javaScript logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-content">
					<p>VUE.js 3</p>
					<img className="icon" src={vueJs} alt="vueJs logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Nuxt 3</p>
					<img className=" icon w-12 h-auto" src={nuxt} alt="nuxt logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>React</p>
					<img className=" icon w-12 h-auto" src={react} alt="react logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>jQuery</p>
					<img className="icon" src={jquery} alt="jquery logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Tailwind</p>
					<img className="icon" src={tailwind} alt="tailwind logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Sass(Scss)</p>
					<img className="icon" src={sass} alt="sass logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>

			<div className="card">
				<div className="card-content">
					<p>TypeScript</p>
					<img className="icon" src={typeScript} alt="typeScript logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>

			<div className="card">
				<div className="card-content">
					<p>Webpack</p>
					<img className="icon" src={webpack} alt="webpack logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>

			<div className="card">
				<div className="card-content">
					<p>Npm</p>
					<img className="icon" src={npm} alt="npm logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Yarn</p>
					<YarnIcon />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Git</p>
					<img className="icon" src={git} alt="git logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>GitHub</p>
					<img className="icon" src={gitHub} alt="gitHub logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>
			<div className="card  ">
				<div className="card-content">
					<p>VS code</p>
					<img className="icon" src={VScode} alt="visual studio code logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||||</span>
						<span className="opacity-50">|</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Firebase</p>
					<img className="icon" src={firebase} alt="firebase logo" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Pinia</p>
					<PiniaIcon />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">|||</span>
						<span className="opacity-50">||</span>
					</p>
				</div>
			</div>
			<div className="card ">
				<div className="card-content">
					<p>Vite</p>
					<img className="icon" src={vite} alt="" />
					<p className="tracking-widest font-bold  ">
						<span className="text-my-accent opacity-100">||</span>
						<span className="opacity-50">|||</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default IconsCircle
