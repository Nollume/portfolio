import React from 'react'
import Fb from './icons/Fb'
import Git from './icons/Git'

type Props = {
	onCloseNavigation: (data: boolean) => void
}

const TheNavigation = (props: Props) => {
	return (
		<nav className="fixed inset-0  bg-my-light dark:bg-my-bgDark isolate md:top-0 md:h-16 md:border-b md:border-my-dark dark:md:border-my-light">
			<ul className="flex flex-col mb-20 mt-8 mx-8 justify-center items-center gap-6 inset-0 absolute md:flex-row">
				<li className="mt-auto md:mt-0 md:ml-auto xl:ml-0">
					{window.innerWidth < 768 ? (
						<a
							onClick={() => {
								props.onCloseNavigation(false)
							}}
							className="nav-link "
							href="#Domov"
						>
							Domov
						</a>
					) : (
						<a className="nav-link " href="#Domov">
							Domov
						</a>
					)}
				</li>
				<li>
					{window.innerWidth < 768 ? (
						<a
							onClick={() => {
								props.onCloseNavigation(false)
							}}
							className="nav-link"
							href="#Omne"
						>
							O mne
						</a>
					) : (
						<a className="nav-link" href="#Omne">
							O mne
						</a>
					)}
				</li>

				<li>
					{window.innerWidth < 768 ? (
						<a
							onClick={() => {
								props.onCloseNavigation(false)
							}}
							className="nav-link"
							href="#Zrucnosti"
						>
							Zručnosti
						</a>
					) : (
						<a className="nav-link" href="#Zrucnosti">
							Zručnosti
						</a>
					)}
				</li>
				<li>
					{window.innerWidth < 768 ? (
						<a
							onClick={() => {
								props.onCloseNavigation(false)
							}}
							className="nav-link"
							href="#Projekty"
						>
							Projekty
						</a>
					) : (
						<a className="nav-link" href="#Projekty">
							Projekty
						</a>
					)}
				</li>
				<li>
					{window.innerWidth < 768 ? (
						<a
							onClick={() => {
								props.onCloseNavigation(false)
							}}
							className="nav-link"
							href="#Kontakt"
						>
							Kontakt
						</a>
					) : (
						<a className="nav-link" href="#Kontakt">
							Kontakt
						</a>
					)}
				</li>
				<li className="hidden md:inline-block font-bold text-2xl rotate-45 select-none">
					|
				</li>
				<li className=" flex items-center gap-2 mt-auto md:mt-0">
					<a
						className="icons"
						href="https://www.facebook.com/marek.dorotovic.7/"
						target="_blank"
						rel="noreferrer"
					>
						<Fb />
					</a>
					<a
						className="icons"
						href="https://github.com/Nollume"
						target="_blank"
						rel="noreferrer"
					>
						<Git />
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default TheNavigation
