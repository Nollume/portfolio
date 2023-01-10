import React from 'react'
import data from '../data/projects.json'

type Props = {
	projectId: number | null
	closeProjectDetail: () => void
	projectDetailOpen: boolean
}

const ProjectDetail = (props: Props) => {
	const currentProject = data.find((i) => i.id === props.projectId)

	document.addEventListener('keyup', (e: KeyboardEvent) => {
		if (props.projectDetailOpen) {
			if (e.code === 'Escape') {
				props.closeProjectDetail()
			}
		}
	})

	return (
		<div className="fixed grid place-items-center inset-0 bg-my-bgDark/40 z-[999]">
			<article
				id="project-detail-container"
				className="projects-article w-11/12 max-w-3xl max-h-[90vh] rounded-md overflow-auto bg-my-light dark:bg-my-bgDark border border-my-dark/20 dark:border-my-light/20"
			>
				<h4 className="font-bold text-xl mb-4 text-my-accent ">
					{currentProject?.title}
				</h4>
				<div className=" md:flex-[2]">
					<img
						className="img-filter w-full h-auto object-contain rounded-md"
						src={currentProject?.images.w600}
						srcSet={`${currentProject?.images.w400} 400w,
								${currentProject?.images.w600} 600w,
								${currentProject?.images.w800} 800w,`}
						alt={currentProject?.altDescription}
					/>
				</div>
				<p className="py-4">{currentProject?.description}</p>
				<div className="flex flex-col">
					<div>
						<a className="projects-a" href={currentProject?.codeUrl}>
							Zobraziť kód
						</a>
					</div>
					{currentProject?.projdectUrl && (
						<div>
							<a className=" projects-a" href={currentProject?.projdectUrl!}>
								Zobraziť projekt
							</a>
						</div>
					)}
				</div>
				<ul className=" projects-ul">
					{currentProject?.technologies.map((technology) => (
						<li key={technology}>{technology}</li>
					))}
				</ul>
				<button
					onClick={props.closeProjectDetail}
					className="btn absolute px-1 py-1 top-2 right-3 "
				>
					<svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
						<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
					</svg>
				</button>
			</article>
		</div>
	)
}

export default ProjectDetail
