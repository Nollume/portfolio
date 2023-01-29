import React, { useEffect } from 'react'

import Certificate from '../components/icons/Certificate'
import IconsCircle from '../components/zrucnosti/IconsCircle'
import drink from '../assets/icons/undraw_refreshing_beverage_td3r.svg'
type Props = {
	handleOpenModal: () => void
}

const Zrucnosti = (props: Props) => {
	return (
		<section
			id="Zrucnosti"
			className="min-h-screen mx-4 pt-14 grid grid-rows-[1.5rem_3rem_1fr_13.5rem] gap-y-4 small:grid-cols-4 small:grid-rows-[2rem_1fr_10rem] medium:grid-rows-[2.5rem_1fr_10rem] medium:mx-8 xl:grid-cols-5 sm:grid-rows-[2.8rem_1fr_10rem] lg:grid-rows-[3rem_1fr_10rem] xl:grid-rows-[3rem__16rem_16rem] xl:gap-4 lg:min-h-min"
		>
			<h3 className="headline3   px-1 z-40 small:col-span-4 xl:col-span-5 ">
				Moje Zručnosti
			</h3>

			<button
				onClick={() => {
					props.handleOpenModal()
				}}
				className="relative small:flex-col  small:w-4/5 small:mx-auto small:row-start-3 small:col-start-4 small:h-20 small:my-auto  btn  w-full flex items-center gap-0.5 justify-center cursor-pointer px-4 lg:flex-row xl:col-start-5 xl:col-span-1"
			>
				Certifikáty
				<Certificate />
				<img
					src={drink}
					className="absolute w-14 bottom-full right-0 small:hidden"
				/>
			</button>
			<IconsCircle />
			<aside className="small:row-start-3  small:col-span-3 text-center my-auto p-2  bg-my-light/90 dark:bg-my-bgDark/90 rounded-md  xl:row-start-2 xl:col-start-5 xl:col-span-1  xl:mx-auto">
				<h4 className="font-bold text-xl text-left ml-8 text-my-accent">
					Vlastnosti a záujmy
				</h4>
				<ul className="grid grid-cols-1 list-disc text-left small:grid-cols-2 place-items-start ml-8 capitalize xl:grid-cols-1">
					<li>flexibilita</li>
					<li>kreativita</li>
					<li>samostatnosť</li>
					<li>spoľahlivosť</li>
					<li className="row-start-5 small:col-span-2 sm:row-start-2 sm:col-start-2 sm:col-span-1 xl:row-start-4 xl:col-start-1">
						logické myslenie
					</li>
					<li className="small:col-span-2 sm:col-span-1">vodičský preukaz B</li>
					<li className="row-start-4 sm:row-start-3">zmysel pre detail</li>
					<li className="small:col-span-2 xl:col-span-1">produkcia hudby</li>
				</ul>
			</aside>
		</section>
	)
}

export default Zrucnosti
