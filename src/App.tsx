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
import ProjectDetail from './components/ProjectDetail'

function App() {
	const [openNav, setopenNav] = useState(false)
	const [top, settop] = useState(true)

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

	/**
	 *
	 * certificates modal
	 */
	const [certificatesModal, setCertificatesModal] = useState<boolean>(false)
	const handleOpenModal = () => {
		setTimeout(() => {
			setCertificatesModal(true)
		}, 100)
	}
	const handleCloseModal = () => {
		setCertificatesModal(false)
	}

	/**Project detail */
	const [projectId, setprojectId] = useState<number | null>(null)
	const [projectDetailOpen, setProjectDetailOpen] = useState<boolean>(false)

	const setProjectDetail = (id: number) => {
		setprojectId(id)

		setTimeout(() => {
			setProjectDetailOpen(true)
		}, 100)
	}
	const closeProjectDetail = () => {
		setProjectDetailOpen(false)
	}

	useEffect(() => {
		pageIsTop()
		viewPortSize()
	}, [top])

	return (
		<div className="App ">
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
			{projectDetailOpen && (
				<ProjectDetail
					projectId={projectId}
					closeProjectDetail={closeProjectDetail}
					projectDetailOpen={projectDetailOpen}
				/>
			)}
			{certificatesModal && (
				<ModalCertificates
					handleCloseModal={handleCloseModal}
					certificatesModal={certificatesModal}
				/>
			)}
			<main className="w-full h-full z-10 relative">
				<Home />
				<Omne />
				<Zrucnosti handleOpenModal={handleOpenModal} />
				<Projekty setProjectDetail={setProjectDetail} />
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
