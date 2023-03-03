import React from 'react'
import Info from '../components/icons/Info'

import coding from '../assets/icons/undraw_coding_re_iv62.svg'
import data from '../data/projects.json'

type Props = {
	setProjectDetail: (n: number) => void
}

const Projekty = (props: Props) => {
	return (
		<section id="Projekty" className="min-h-screen relative  pt-14">
			<h3 className="headline3 mb-4  px-1 z-40">projekty</h3>

			<div className="projects-container  grid grid-cols-1 gap-10 md:mx-8 md:gap-8 xl:grid-cols-2 xl:gap-x-12 ">
				{data.map((project) => (
					<section
						data-aos="zoom-in-up"
						data-aos-duration="400"
						key={project.id}
						className="projects-sections"
					>
						<div className="relative overflow-hidden md:flex-[2]">
							<img
								className="img-filter w-full h-auto object-contain sm:rounded-md"
								src={project.images.w600}
								srcSet={`${project.images.w400} 400w,
								${project.images.w600} 600w,
								${project.images.w800} 800w,`}
								alt={project.altDescription}
							/>
						</div>

						<article className="projects-article ">
							<h4 className="font-bold text-xl   ">{project.title}</h4>
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
							<div>
								<button
									onClick={() => props.setProjectDetail(project.id)}
									className=" hover:text-my-accentHover duration-300"
								>
									<p className="flex items-center gap-2 underline underline-offset-2">
										<Info /> Viac info
									</p>
								</button>
							</div>
						</article>
					</section>
				))}
				{/* xl:col-span-2 md:w-1/2 xl:w-1/2 */}
				<aside
					data-aos="zoom-in-up"
					data-aos-duration="400"
					className=" grid place-items-center  relative"
				>
					<img className="w-4/5 h-auto " src={coding} alt="coding image" />
				</aside>
			</div>
		</section>
	)
}

export default Projekty
