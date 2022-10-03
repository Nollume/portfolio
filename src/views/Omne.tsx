import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import programmer from '../assets/images/icons/icons8-programmer-64.png'

type Props = {}

const Omne = (props: Props) => {
	return (
		<section id="Omne" className=" pt-14 px-4  medium:px-8">
			<h3 className=" headline3 mb-4  z-40 medium:mb-8">O mne</h3>

			<div className="flex  items-center justify-start ">
				<ul
					data-aos="zoom-in-up"
					data-aos-duration="400"
					className=" bg-my-light/90 dark:bg-my-bgDark/90 p-4  flex flex-col gap-2 rounded-md md:w-3/4 lg:w-2/3 xl:w-1/2"
				>
					<li>
						<p className="card">
							{' '}
							<strong className="text-my-accent">1999/2008: </strong> Základná
							škola.
						</p>
					</li>
					<li>
						<p className="card">
							<strong className="text-my-accent">2008/2012: </strong> Stredná
							odborná škola elektrotechnická -vyučený mechanik počítačových
							sietí , ukončené maturitou.
						</p>
					</li>
					<li>
						<p className="card">
							{' '}
							<strong className="text-my-accent">2012/2022: </strong>
							Hned po škole som začal pracovať vystriedal som viac pracovných
							oblastí. Venoval som sa hudobnej produkcii čomu sa stále venujem
							ako hobby.
						</p>
					</li>
					<li>
						<p className="card">
							<strong className="text-my-accent">2020: </strong> Kurz Anglického
							jazyka ktorý sa stále učím.
						</p>
					</li>
					<li>
						<p className="card">
							{' '}
							<strong className="text-my-accent">2021: </strong>Kurz HTML a CSS.
						</p>
					</li>
					<li>
						<p className="card">
							<strong className="text-my-accent">2022: </strong> Kurzy
							Sass(SCSS), JavaScript, Vue.js, Git, React, Tailwind CSS,
							Firebase, Typescript...
						</p>
					</li>
					<li>
						<p className="card">
							{' '}
							<strong className="text-my-accent">
								2023/2024 - Plány do budúcna:{' '}
							</strong>{' '}
							Nuxt.js - Next.js. Ionic, Node.js - Express.js , MongoDb / PHP -
							Laravel.
						</p>
					</li>
				</ul>
				<div className="flying hidden md:block mx-auto xl:hidden">
					<img src={programmer} alt="computer" />
				</div>

				<div className="hidden mx-auto xl:flex relative after:absolute after:inset-0 after:bg-my-accent after:-bottom-8 after:-right-8 after:top-8 after:left-8 after:-z-10 before:absolute before:inset-0 before:my-gradient before:-top-8 before:-left-8 before:bottom-8 before:right-8 before:-z-10">
					<img
						className="w-[18.75rem] h-auto "
						src="https://ik.imagekit.io/nollume/tr:w-400/deva-darshan-S7qbLaINVZ0-unsplash_r2pfjR_AA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663767246144"
						alt="creek"
					/>
				</div>
			</div>
		</section>
	)
}

export default Omne
