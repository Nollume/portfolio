import React from 'react'

type Props = {}

const Certificate = (props: Props) => {
	return (
		<svg
			className="stroke-current fill-transparent scale-50"
			xmlns="http://www.w3.org/2000/svg"
			height="48"
			width="48"
		>
			<path d="M13 35h28V7h-3v13.9l-4.65-2.85-4.65 2.85V7H13v28Zm0 3q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm-6 6q-1.2 0-2.1-.9Q4 42.2 4 41V10h3v31h31v3ZM28.7 7H38ZM13 7h28Z" />
		</svg>
	)
}

export default Certificate
