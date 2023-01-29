import React from 'react'

type Props = {}

const Info = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-current w-8 h-8"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="12" y1="8" x2="12.01" y2="8" />
			<rect x="4" y="4" width="16" height="16" rx="2" />
			<polyline points="11 12 12 12 12 16 13 16" />
		</svg>
	)
}

export default Info
