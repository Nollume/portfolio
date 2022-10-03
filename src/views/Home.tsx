import React, { useEffect, useState } from 'react'
// @ts-ignore
import TypeWriterEffect from 'react-typewriter-effect'
import { ParallaxBanner } from 'react-scroll-parallax'
import Aos from 'aos'
import 'aos/dist/aos.css'

type Props = {}

const Home = (props: Props) => {
	const [showHeadline, setShowHeadline] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowHeadline(true)
		}, 3600)
	}, [])
	return (
		<ParallaxBanner
			layers={[
				{
					image:
						'https://ik.imagekit.io/nollume/pexels-andrew-neel-2312369.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662705823855',
					speed: -20,
				},
			]}
			className=" twoxl:rounded-b-md"
		>
			<section
				id="Domov"
				className=" home z-10  flex flex-col gap-2 items-center justify-between min-h-screen pt-14 pb-4 relative isolate md:pt-28"
			>
				<article className=" flex flex-col items-center justify-center gap-1  px-4 py-2 h-28 ">
					<TypeWriterEffect
						startDelay={100}
						cursorColor="transparent"
						text="Zdravím"
						hideCursorAfterText="true"
						typeSpeed={100}
						textStyle={{
							whiteSpace: 'nowrap',
							textTransform: 'uppercase',
							lineHeight: 1,
							fontWeight: 700,
							fontSize: 'clamp(1.5rem, 6vw, 3.75rem)',
							color: 'rgb(226 232 240)',
							textShadow: '0.0625rem 0.0625rem 0.3125rem #000',
						}}
					/>
					<div className="flex items-center">
						<TypeWriterEffect
							startDelay={1400}
							cursorColor="transparent"
							text="Volám sa"
							hideCursorAfterText="true"
							typeSpeed={100}
							textStyle={{
								whiteSpace: 'nowrap',
								lineHeight: 1,
								fontSize: 'clamp(1rem, 4vw, 2rem)',
								color: 'rgb(226 232 240)',
								textShadow: '0.0625rem 0.0625rem 0.3125rem #000',
							}}
						/>
						&nbsp;&nbsp;
						<TypeWriterEffect
							startDelay={2000}
							cursorColor="transparent"
							text="Marek"
							hideCursorAfterText="true"
							typeSpeed={100}
							textStyle={{
								whiteSpace: 'nowrap',
								fontWeight: 'bold',
								lineHeight: 1,
								fontSize: 'clamp(1rem, 4vw, 2rem)',
								color: 'rgb(226 232 240)',
								textShadow: '0.0625rem 0.0625rem 0.3125rem #000',
							}}
						/>
						&nbsp;&nbsp;
						<TypeWriterEffect
							startDelay={2600}
							cursorColor="transparent"
							text="a som"
							hideCursorAfterText="true"
							typeSpeed={100}
							textStyle={{
								whiteSpace: 'nowrap',
								lineHeight: 1,
								fontSize: 'clamp(1rem, 4vw, 2rem)',
								color: 'rgb(226 232 240)',
								textShadow: '0.0625rem 0.0625rem 0.3125rem #000',
							}}
						/>
					</div>
					{showHeadline && (
						<h1
							data-aos="zoom-in-up"
							style={{
								backgroundImage: `linear-gradient(to top, #30cfd0 0%, #330867 100%)`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textAlign: 'center',
								textTransform: 'uppercase',
								lineHeight: 1,
								fontWeight: 700,
								fontSize: 'clamp(1.5rem, 6vw, 3.75rem)',
							}}
						>
							&#123;Front-End Web developer&#125;
						</h1>
					)}
				</article>
				<div className=" flex flex-col justify-evenly gap-16 sm:self-center my-auto sm:flex-row  items-center">
					<img
						className=" w-56 h-auto rounded-md mx-auto z-20 saturate-50 shadow-xl "
						src="https://ik.imagekit.io/nollume/tr:w-400/Face_XZve9yJw8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662707649279"
						alt="Marek"
					/>
					<p
						style={{
							fontSize: 'clamp(1rem, 2vw, 2rem)',
						}}
						className="text-my-light text-shadow font-bold text-center px-4 small:px-8 medium:px-10 sm:w-72 md:w-96 xl:w-[40rem]"
					>
						Junior front-end web developer. Stále motivovaný sa zdokonalovať a
						učiť nové technológie.
					</p>
				</div>
			</section>
		</ParallaxBanner>
	)
}

export default Home
