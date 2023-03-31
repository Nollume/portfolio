// @ts-nocheck
import React from 'react'
import Download from './icons/Download'

import sass from '../assets/certifikaty/css-preprocesory-sass1.jpg'
import git from '../assets/certifikaty/git-a-github-zaklady1.jpg'
import javaScript from '../assets/certifikaty/skillmea-certifikat-javascript-a-es61.jpg'
import reactTs from '../assets/certifikaty/skillmea-certifikat-react-angular-vue-a-typescript1.jpg'
import tailwind from '../assets/certifikaty/skillmea-certifikat-tailwind-css1.jpg'
import vue from '../assets/certifikaty/skillmea-certifikat-vue-js-single-page-aplikacie1.jpg'
import htmlCss from '../assets/certifikaty/webrebel-1-html-css-javascript1.jpg'
import zakladyProgramovania from '../assets/certifikaty/zaklady-programovania-a-oop1.jpg'
import nuxt from '../assets/certifikaty/UC-427971e9-f2ca-472d-b2c4-3020d4b395961.jpg'
import vitest from '../assets/certifikaty/UC-575ae6df-18af-4836-88ca-ea19ed442d131.jpg'
import vueUdemy from '../assets/certifikaty/UC-1d28d63e-8f8e-4640-b8b1-54b666830ec61.jpg'
import nodeJs from '../assets/certifikaty/UC-e2dad69b-89e9-4bd5-bbe3-923ca8315cc02.jpg'

import sassPdf from '../assets/certifikaty/css-preprocesory-sass.pdf'
import gitPdf from '../assets/certifikaty/git-a-github-zaklady.pdf'
import javaScriptPdf from '../assets/certifikaty/skillmea-certifikat-javascript-a-es6.pdf'
import reactTsPdf from '../assets/certifikaty/skillmea-certifikat-react-angular-vue-a-typescript.pdf'
import tailwindPdf from '../assets/certifikaty/skillmea-certifikat-tailwind-css.pdf'
import vuePdf from '../assets/certifikaty/skillmea-certifikat-vue-js-single-page-aplikacie.pdf'
import htmlCssPdf from '../assets/certifikaty/webrebel-1-html-css-javascript.pdf'
import zakladyProgramovaniaPdf from '../assets/certifikaty/zaklady-programovania-a-oop.pdf'
import nuxtPdf from '../assets/certifikaty/UC-427971e9-f2ca-472d-b2c4-3020d4b39596.pdf'
import vitestPdf from '../assets/certifikaty/UC-575ae6df-18af-4836-88ca-ea19ed442d13.pdf'
import vueUdemyPdf from '../assets/certifikaty/UC-1d28d63e-8f8e-4640-b8b1-54b666830ec6.pdf'
import nodeJsPdf from '../assets/certifikaty/UC-e2dad69b-89e9-4bd5-bbe3-923ca8315cc0.pdf'

type Props = { handleCloseModal: () => void; certificatesModal: boolean }

interface certificatesInterface {
	id: number
	name: string
	url: string
	pdf: string
}
const ModalCertificates = (props: Props) => {
	const certificates: certificatesInterface[] = [
		{ id: 6, name: 'htmlCss', url: htmlCss, pdf: htmlCssPdf },
		{
			id: 1,
			name: 'sass',
			url: sass,
			pdf: sassPdf,
		},
		{ id: 2, name: 'git', url: git, pdf: gitPdf },
		{ id: 3, name: 'javaScript', url: javaScript, pdf: javaScriptPdf },
		{ id: 9, name: 'vue', url: vue, pdf: vuePdf },
		{ id: 4, name: 'reactTs', url: reactTs, pdf: reactTsPdf },
		{ id: 5, name: 'tailwind', url: tailwind, pdf: tailwindPdf },
		{
			id: 7,
			name: 'zakladyProgramovania',
			url: zakladyProgramovania,
			pdf: zakladyProgramovaniaPdf,
		},
		{ id: 8, name: 'nuxt', url: nuxt, pdf: nuxtPdf },
		{ id: 10, name: 'vitest', url: vitest, pdf: vitestPdf },
		{ id: 11, name: 'vueUdemy', url: vueUdemy, pdf: vueUdemyPdf },
		{ id: 12, name: 'node', url: nodeJs, pdf: nodeJsPdf },
	]
	document.addEventListener('keyup', (e: KeyboardEvent) => {
		if (props.certificatesModal) {
			if (e.code === 'Escape') {
				props.handleCloseModal()
			}
		}
	})

	document.addEventListener('click', (e: MouseEvent) => {
		if (e.target instanceof Element) {
			if (!e.target.closest('#certificates-container')) {
				if (props.certificatesModal) {
					props.handleCloseModal()
				}
			}
		}
	})
	return (
		<div className="fixed grid place-items-center inset-0 bg-my-bgDark/40 z-[999]">
			<div
				id="certificates-container"
				className=" grid grid-cols-1 gap-2 p-4 max-h-[90%] bg-my-light dark:bg-my-bgDark rounded-md  border border-my-dark/20 dark:border-my-light/20 small:max-w-[90%] sm:grid-cols-2 md:max-w-[80%] lg:grid-cols-3 lg:max-w-[100rem] twoxl:grid-cols-4 overflow-auto"
			>
				{certificates.map((certificate) => (
					<div
						key={certificate.id}
						className="p-2 border bg-[#d7dfea] dark:bg-[#131e37]  border-my-dark/20 dark:border-my-light/20 rounded-md"
					>
						<div className="flex justify-start">
							<a
								href={certificate.pdf}
								download
								className="flex flex-row-reverse items-center justify-end cursor-pointer"
							>
								<span className="text-my-accent underline hover:text-my-accentHover duration-300">
									Stiahnúť .PDF
								</span>{' '}
								<Download />
							</a>
						</div>

						<img src={certificate.url} alt={certificate.name} />
					</div>
				))}

				<button
					onClick={props.handleCloseModal}
					className="btn fixed px-1 py-1 top-2 right-3 "
				>
					<svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
						<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ModalCertificates
