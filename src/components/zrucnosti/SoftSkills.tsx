import React from 'react'

import check from '../../assets/icons/undraw_check.svg'
type Props = {}

type softSkill = {
	id: number
	description: string
}

const softSkills = (props: Props) => {
	const skills: softSkill[] = [
		{
			id: 1,
			description: 'Flexibilita',
		},
		{
			id: 2,
			description: 'Kreativita',
		},
		{
			id: 3,
			description: 'Samostatnosť',
		},
		{
			id: 4,
			description: 'Spoľahlivosť',
		},
		{
			id: 5,
			description: 'Logické myslenie',
		},
		{
			id: 6,
			description: 'Vodičský preukaz B',
		},
		{
			id: 7,
			description: 'Produkcia hudby',
		},
	]
	return (
		<aside className=" p-2  xl:self-center">
			<h4 className="font-bold text-xl text-left mb-2 text-my-accent xl:pl-6 ">
				Vlastnosti a záujmy
			</h4>
			<ul className="grid gap-1 md:grid-cols-2 xl:grid-cols-1 xl:pl-4">
				{skills.map((skill) => (
					<li key={skill.id} className="flex items-center gap-2">
						<img className="w-4 aspect-square" src={check} alt="check" />{' '}
						<p>{skill.description}</p>{' '}
					</li>
				))}
			</ul>
		</aside>
	)
}

export default softSkills
