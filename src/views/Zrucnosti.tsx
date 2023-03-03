import React, { useEffect } from 'react'

import SoftSkills from '../components/zrucnosti/SoftSkills'
import Certificate from '../components/icons/Certificate'
import IconsCircle from '../components/zrucnosti/IconsCircle'
import drink from '../assets/icons/undraw_refreshing_beverage_td3r.svg'
import pipe from '../assets/pipes/icons8-pipe-32 (1).png'
type Props = {
	handleOpenModal: () => void
}

const Zrucnosti = (props: Props) => {
	const openModal = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement
		if (!target.matches('.drink')) {
			props.handleOpenModal()
		}
	}

	return (
		<section
			id="Zrucnosti"
			className="min-h-screen relative mx-4 pt-14 grid gap-4 medium:grid-cols-2 xl:grid-cols-4"
		>
			<h3 className="headline3 px-1 z-40 medium:col-span-2 xl:col-span-4">
				Moje Zručnosti
			</h3>

			<button
				onClick={(e) => {
					openModal(e)
				}}
				className="relative btn w-full flex uppercase items-center gap-0.5 justify-center cursor-pointer px-4 small:row-start-4 medium:col-start-2 medium:row-start-3 xl:text-2xl  xl:col-start-4 xl:my-20 "
			>
				Certifikáty
				<Certificate />
				<img
					src={drink}
					className="drink absolute w-14 bottom-full cursor-default right-0  "
				/>
			</button>
			<IconsCircle />
			<SoftSkills />
		</section>
	)
}

export default Zrucnosti
