import React from 'react'
import check from '../assets/icons/undraw_check.svg'
type Props = {}

const HomeList = (props: Props) => {
	return (
		<ul
			style={{
				fontSize: 'clamp(1rem, 2vw, 1.4rem)',
			}}
			className="z-20 relative p-4 divide-y-[0.0625rem] divide-my-accent"
		>
			<li className="flex gap-2 items-center py-1">
				<img className="w-5 aspect-square" src={check} alt="check" />
				Junior Front-end web developer.
			</li>
			<li className="flex gap-2 items-center py-1">
				<img className="w-5 aspect-square" src={check} alt="check" />
				Najradšej pracujem s VUE.js / Nuxt3.
			</li>
			<li className="flex gap-2 items-center py-1">
				<img className="w-5 aspect-square" src={check} alt="check" />
				Som motivovaný sa zdokonalovať a učiť nové technológie!
			</li>
			<li className="flex gap-2 items-center py-1">
				<img className="w-5 aspect-square" src={check} alt="check" />
				Rád sa učím a naberám skúsenosti.
			</li>
			<li className="flex gap-2 items-center py-1">
				<img className="w-5 aspect-square" src={check} alt="check" />
				Momentálne sa učím node.js.
			</li>
		</ul>
	)
}

export default HomeList
