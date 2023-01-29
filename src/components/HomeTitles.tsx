import React from 'react'

type Props = {}

const HomeTitles = (props: Props) => {
	return (
		<article className="flex flex-col items-end  relative mx-4 py-4 xl:mx-8">
			<h2
				style={{
					fontSize: 'clamp(1rem, 4vw, 2rem)',
					lineHeight: 'clamp(1rem, 4vw, 2rem)',
				}}
				className="name opacity-0 font-bold"
			>
				Marek Dorotovič
			</h2>
			<h1
				className="main-title font-bold "
				style={{
					fontSize: 'clamp(1.5rem, 7vw, 4.5rem)',
					lineHeight: 'clamp(1.5rem, 7vw, 4.5rem)',
				}}
			>
				<span className="my-gradient my-gradient-text">Front-end</span> web
				developer
			</h1>
			<h3
				className="main-title-rear opacity-0 absolute bottom-1 left-0 font-bold whitespace-nowrap -z-10  select-none"
				style={{
					fontSize: 'clamp(4rem, 8vw, 8rem)',
				}}
			>
				Front-end web developer
			</h3>
		</article>
	)
}

export default HomeTitles
