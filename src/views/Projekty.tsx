import React from 'react'
import Info from '../components/icons/Info'

import coding from '../assets/icons/undraw_coding_re_iv62.svg'
import data from '../data/projects.json'

type Props = {
	setProjectDetail: (n: number) => void
}

const Projekty = (props: Props) => {
	return (
		<section id="Projekty" className="min-h-screen  pt-14">
			<h3 className="headline3 mb-4  px-1 z-40">projekty</h3>
			<div className="projects-container  grid grid-cols-1 gap-10 md:mx-8 md:gap-8 xl:grid-cols-2 xl:gap-x-12 ">
				{data.map((project) => (
					<section key={project.id} className="projects-sections">
						<div className="relative overflow-hidden md:flex-[2]">
							<img
								className="img-filter w-full h-auto object-contain sm:rounded-md"
								src={project.images.w600}
								srcSet={`${project.images.w400} 400w,
								${project.images.w600} 600w,
								${project.images.w800} 800w,`}
								alt={project.altDescription}
							/>
							<button
								onClick={() => props.setProjectDetail(project.id)}
								className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-40 aspect-square rounded-full bg-my-accent capitalize font-bold border border-my-dark hover:animate-ping"
							>
								<p className="absolute bottom-[60%] right-[60%]">
									<Info />
								</p>
							</button>
						</div>

						<article className="projects-article ">
							<h4 className="font-bold text-xl  text-my-accent ">
								{project.title}
							</h4>
							<div className="flex flex-col">
								<div>
									<a className="projects-a" href={project.codeUrl}>
										Zobraziť kód
									</a>
								</div>
								{project.projdectUrl && (
									<div>
										<a className=" projects-a" href={project.projdectUrl!}>
											Zobraziť projekt
										</a>
									</div>
								)}
							</div>
							<ul className=" projects-ul">
								{project.technologies.map((technology) => (
									<li key={technology}>{technology}</li>
								))}
							</ul>
						</article>
					</section>
				))}
				{/* xl:col-span-2 */}
				<aside className=" grid place-items-center  relative">
					<img
						className="w-4/5 h-auto md:w-1/2 xl:w-1/2"
						src={coding}
						alt="coding image"
					/>
				</aside>
			</div>
		</section>
	)
}

export default Projekty
