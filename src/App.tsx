import React, { useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash'

import Home from './views/Home'
import ThemeIcon from './components/ThemeIcon'
import Omne from './views/Omne'
import Zrucnosti from './views/Zrucnosti'
import Projekty from './views/Projekty'
import Kontakt from './views/Kontakt'
import TheNavigation from './components/TheNavigation'
import HamburgerMenu from './components/HamburgerMenu'

// @ts-ignore
import sass from './assets/certifikaty/css-preprocesory-sass.pdf'
// @ts-ignore
import git from './assets/certifikaty/git-a-github-zaklady.pdf'
// @ts-ignore
import javaScript from './assets/certifikaty/skillmea-certifikat-javascript-a-es6.pdf'
// @ts-ignore
import reactTs from './assets/certifikaty/skillmea-certifikat-react-angular-vue-a-typescript.pdf'
// @ts-ignore
import tailwind from './assets/certifikaty/skillmea-certifikat-tailwind-css.pdf'
// @ts-ignore
import vue from './assets/certifikaty/skillmea-certifikat-vue-js-single-page-aplikacie.pdf'
// @ts-ignore
import htmlCss from './assets/certifikaty/webrebel-1-html-css-javascript.pdf'
// @ts-ignore
import zakladyProgramovania from './assets/certifikaty/zaklady-programovania-a-oop.pdf'
// @ts-ignore
import nuxt from './assets/certifikaty/UC-427971e9-f2ca-472d-b2c4-3020d4b39596.pdf'
// @ts-ignore
import vitest from './assets/certifikaty/UC-575ae6df-18af-4836-88ca-ea19ed442d13.pdf'

function App() {
	const [openNav, setopenNav] = useState(false)
	const [top, settop] = useState(true)
	const [pageloading, setpageloading] = useState(true)
	const modal = useRef<HTMLDialogElement>(null)

	function handleToggleMenu(): void {
		setopenNav(!openNav)
	}
	const pageIsTop = () => {
		document.addEventListener(
			'scroll',
			debounce(() => {
				if (window.scrollY > 50) {
					settop(false)
				} else settop(true)
			}, 300)
		)
	}
	const viewPortSize = () => {
		if (window.innerWidth >= 768) {
			setopenNav(true)
		} else setopenNav(false)
		window.addEventListener(
			'resize',
			debounce((e) => {
				if (window.innerWidth >= 768) {
					setopenNav(true)
				} else {
					setopenNav(false)
				}
			}, 500)
		)
	}

	const onCloseNavigation = (data: boolean): void => {
		setopenNav(data)
	}

	const handleOpenModal = () => modal.current?.showModal()
	const handleCloseModal = () => modal.current?.close()

	useEffect(() => {
		pageIsTop()
		viewPortSize()
	}, [top])

	useEffect(() => {
		setTimeout(() => {
			setpageloading(false)
		}, 1000)
	}, [])

	return (
		<div className="App overflow-hidden">
			{pageloading && (
				<div className="bg-my-light dark:bg-my-bgDark text-3xl fixed inset-0 grid place-content-center z-[99999]">
					Loading...
				</div>
			)}
			<dialog ref={modal} className=" modal p-0 w-[80%] h-[80%]">
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 twoxl:grid-cols-4">
					<iframe
						src={htmlCss}
						className="w-full min-h-[25rem] appearance-none"
					></iframe>
					<iframe
						src={zakladyProgramovania}
						className="w-full min-h-[25rem] "
					></iframe>

					<iframe src={sass} className="w-full min-h-[25rem]"></iframe>

					<iframe src={javaScript} className="w-full min-h-[25rem]"></iframe>
					<iframe src={vue} className="w-full min-h-[25rem]"></iframe>
					<iframe src={reactTs} className="w-full min-h-[25rem]"></iframe>
					<iframe src={git} className="w-full min-h-[25rem] "></iframe>
					<iframe src={tailwind} className="w-full min-h-[25rem]"></iframe>
					<iframe src={nuxt} className="w-full min-h-[11rem]"></iframe>
					<iframe src={vitest} className="w-full min-h-[11rem]"></iframe>
					<button
						onClick={handleCloseModal}
						className="btn fixed px-1 py-1 top-2 right-3 "
					>
						<svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
							<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						</svg>
					</button>
				</div>
			</dialog>
			<header className="w-full h-12  fixed top-0 z-30 flex">
				<div
					className={
						top
							? 'absolute w-full h-full bg-black/80 scale-y-0 origin-top transition-all duration-200 ease-in-out'
							: 'absolute w-full h-full  bg-black/80 scale-y-100 origin-top transition-all duration-200 ease-in-out'
					}
				></div>

				<span className=" flex items-center mr-auto isolate m-2 md:z-50 ">
					<ThemeIcon />
				</span>

				{openNav && <TheNavigation onCloseNavigation={onCloseNavigation} />}

				<HamburgerMenu
					top={top}
					openNav={openNav}
					handleToggleMenu={handleToggleMenu}
				/>
			</header>
			<main className="w-full h-full z-10">
				<Home />
				<Omne />
				<Zrucnosti handleOpenModal={handleOpenModal} />
				<Projekty />
				<Kontakt />
			</main>

			<footer className=" w-full flex flex-row-reverse gap-2 items-center justify-center text-sm absolute bottom-0 z-20">
				<p className="small:hidden">|</p>
				<p>&copy;/2022</p>
				<p>Marek Dorotovič</p>
			</footer>
		</div>
	)
}

export default App
