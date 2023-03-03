import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import fishing from '../assets/icons/undraw_fishing_hoxa.svg'
import pipe from '../assets/pipes/icons8-pipe-24.png'

type Props = {}

const Omne = (props: Props) => {
	return (
		<section id="Omne" className=" pt-14 px-4  medium:px-8 relative">
			<h3 className=" headline3 mb-4  z-40 medium:mb-8">O mne</h3>

			<div className="flex flex-col gap-2 items-center justify-start md:flex-row">
				<ul
					data-aos="zoom-in-up"
					data-aos-duration="400"
					className="order-2 bg-my-light/90 dark:bg-my-bgDark/90  flex flex-col gap-2 rounded-md md:order-1 md:flex-1 md:w-3/4 lg:w-2/3 xl:w-1/2"
				>
					<li>
						<p className="cardAbout">
							{' '}
							<strong className="text-my-accent">1999/2008: </strong> Základná
							škola.
						</p>
					</li>
					<li>
						<p className="cardAbout">
							<strong className="text-my-accent">2008/2012: </strong> Stredná
							odborná škola elektrotechnická -vyučený mechanik počítačových
							sietí , ukončené maturitou.
						</p>
					</li>
					<li>
						<p className="cardAbout">
							{' '}
							<strong className="text-my-accent">2012/2022: </strong>
							Hned po škole som začal pracovať vystriedal som viac pracovných
							oblastí ktoré sa netýkali IT odvetia.
							Venoval som sa hudobnej produkcii čomu sa stále venujem ako hobby.
						</p>
					</li>
					<li>
						<p className="cardAbout">
							<strong className="text-my-accent">2020: </strong> Kurz Anglického
							jazyka ktorý sa stále učím.
						</p>
					</li>
					<li>
						<p className="cardAbout">
							{' '}
							<strong className="text-my-accent">2021: </strong>Kurz HTML a CSS.
						</p>
					</li>
					<li>
						<p className="cardAbout">
							<strong className="text-my-accent">2022: </strong> Kurzy
							Sass(SCSS), JavaScript, Vue.js, Git, React, Tailwind CSS,
							Firebase, Typescript, Nuxt3 ...
						</p>
					</li>
					<li>
						<p className="cardAbout">
							{' '}
							<strong className="text-my-accent">2023: </strong> Momentálne sa
							učím Node.js - Express.js + MongoDB
						</p>
					</li>
					<li>
						<p className="cardAbout">
							{' '}
							<strong className="text-my-accent">Plány do budúcna: </strong> PHP
							- Laravel, Ionic
						</p>
					</li>
				</ul>
				<div
					data-aos="zoom-in-up"
					data-aos-duration="400"
					className=" mx-auto w-full h-auto small:w-4/5 sm:w-2/3 md:order-2 md:flex-1"
				>
					<img src={fishing} alt="fishing image" />
				</div>
			</div>
		</section>
	)
}

export default Omne
