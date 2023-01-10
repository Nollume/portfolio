import React from 'react'
import coding from '../assets/icons/undraw_coding_re_iv62.svg'
import data from '../data/projects.json'

type Props = {}

const Projekty = (props: Props) => {
	return (
		<section id="Projekty" className="min-h-screen  pt-14">
			<h3 className="headline3 mb-4  px-1 z-40">projekty</h3>
			<div className="projects-container  grid grid-cols-1 gap-10 md:mx-8 md:gap-8 xl:grid-cols-2 xl:gap-x-12 ">
				{data.map((project) => (
					<section key={project.id} className="projects-sections">
						<div className="md:flex-[2] ">
							<img
								className="w-full h-auto object-contain sm:rounded-md"
								src={project.images.w600}
								srcSet={`${project.images.w400} 400w,
								${project.images.w600} 600w,
								${project.images.w800} 800w,`}
								alt={project.altDescription}
							/>
						</div>

						<article className="projects-article ">
							<h4 className="font-bold text-xl  text-my-accent ">
								{project.title}
							</h4>
							<p className="mb-2 ">{project.description}</p>
							<div className="flex flex-col">
								<div>
									<a className="projects-a" href={project.codeUrl}>
										Zobraziť kód
									</a>
								</div>
								<div>
									<a className=" projects-a" href={project.projdectUrl!}>
										Zobraziť projekt
									</a>
								</div>
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
