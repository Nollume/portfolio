import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import skills from '../../data/skills'

type Props = {}

const IconsCircle = (props: Props) => {
	useEffect(() => {
		Aos.init({ duration: 400 })
	}, [])

	return (
		<div className=" select-none relative flex flex-col gap-2 medium:col-span-2 md:gap-4 xl:col-span-3 xl:row-span-2">
			{' '}
			{skills.map((skill) => (
				<div key={skill.name}>
					<h3 className=" font-bold mb-2 text-center text-lg relative after:absolute after:w-1 after:left-0 after:h-[110%] after:bg-my-accent after:top-1/2 after:-translate-y-1/2 after:hidden md:after:block md:text-left md:mb-4 md:pl-2 md:text-xl lg:pl-4">
						{skill.name}
					</h3>
					<div
						className="grid grid-cols-3 gap-2 medium:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
					>
						{skill.skills.map((icon) => (
							<div key={icon.id} className="card">
								<div className="card-content">
									<p className="text-xs">{icon.name}</p>
									<img
										className="icon scale-75 small:scale-100"
										src={icon.image}
										alt={icon.name}
									/>
									<p className=" tracking-widest font-bold  ">
										<span className="text-my-accent opacity-100">
											{icon.skill}
										</span>
										<span className="opacity-50">{icon.noSkill}</span>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default IconsCircle
