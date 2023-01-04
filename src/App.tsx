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
import ModalCertificates from './components/ModalCertificates'


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
				<ModalCertificates handleCloseModal={handleCloseModal} />
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
