import React from 'react'
import coding from '../assets/icons/undraw_coding_re_iv62.svg'

type Props = {}

const Projekty = (props: Props) => {
	return (
		<section id="Projekty" className="min-h-screen  pt-14">
			<h3 className="headline3 mb-4  px-1 z-40">projekty</h3>
			<div className="projects-container  grid grid-cols-1 gap-10 md:mx-8 md:gap-8 xl:grid-cols-2 xl:gap-x-12 ">
				{/* NOLLU */}

				<section className="projects-sections">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/nollu_8x8W-DHG3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785494"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/nollu_8x8W-DHG3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785494 400w,
							https://ik.imagekit.io/nollume/tr:w-600/nollu_8x8W-DHG3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785494 600w,
							https://ik.imagekit.io/nollume/tr:w-800/nollu_8x8W-DHG3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785494 800w,"
							alt="Nollu chat app"
						/>
					</div>

					<article className="projects-article ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Nollu chat app
						</h4>
						<p className="mb-2 ">
							Chat aplikácia zatial iba mobilný dizajn. Umožňuje pridávať
							vyhľadávať priateľov, chatovať, upravovať profil, meniť fotku...
							Použitý firebase na databázu a autentifikáciu.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Nollu-chat-app"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a className=" projects-a" href="https://nollu-9fc76.web.app/">
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className=" projects-ul">
							<li>VUE.js</li>
							<li>Tailwind CSS</li>
							<li>Pinia</li>
							<li>Firebase</li>
							<li>Vite</li>
						</ul>
					</article>
				</section>
				{/* M&L page */}
				<section className="projects-sections">
					<div className=" md:flex-[2]  ">
						<img
							className=" w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/markandlukasmusic_4uoP2VHie3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785515"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/markandlukasmusic_4uoP2VHie3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785515 400w,
							https://ik.imagekit.io/nollume/tr:w-600/markandlukasmusic_4uoP2VHie3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785515 600w,
							https://ik.imagekit.io/nollume/tr:w-800/markandlukasmusic_4uoP2VHie3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785515 800w,"
							alt="M&L page"
						/>
					</div>
					<article className="projects-article ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Mark & Lukas music page
						</h4>
						<p className="mb-2 ">
							SPA spravená v Nuxt 3 so vstavaným audio prehrávačom. Použil som
							iTunes api na zobrazenie krátkych ukážok mojich skladieb ked som
							sa venoval hudobnej produkcii spolu s bratom.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/M-L"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://markandlukas.netlify.app"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>Nuxt 3</li>
							<li>VUE.js</li>
							<li>Tailwind CSS</li>
							<li>Pinia</li>
						</ul>
					</article>
				</section>
				{/* Space tourism multi page website */}
				<section className="projects-sections">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/space_hW36YBAxi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785326"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/space_hW36YBAxi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785326 400w,
							https://ik.imagekit.io/nollume/tr:w-600/space_hW36YBAxi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785326 600w,
							https://ik.imagekit.io/nollume/tr:w-800/space_hW36YBAxi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785326 800w,"
							alt="Comments section app"
						/>
					</div>
					<article className="projects-article ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Space tourism multi page website
						</h4>
						<p className="mb-2 ">
							Responzívna (SPA) stránka spravená vo VUE.js + práca s Axios API.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Space-tourism-multi-page-website"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/Space-tourism-multi-page-website/"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>SCSS</li>
							<li>VUE.js</li>
							<li>Axios API</li>
							<li>Pinia</li>
							<li>Vite</li>
						</ul>
					</article>
				</section>
				{/* Countries quiz */}
				<section className="projects-sections ">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/quizCountries_PXiH_dUsA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785309"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/quizCountries_PXiH_dUsA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785309 400w,
							https://ik.imagekit.io/nollume/tr:w-600/quizCountries_PXiH_dUsA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785309 600w,
							https://ik.imagekit.io/nollume/tr:w-800/quizCountries_PXiH_dUsA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785309 800w,"
							alt="Weather app"
						/>
					</div>
					<article className="projects-article  ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Countries quiz
						</h4>
						<p className="mb-2 ">
							Kvíz v ktorom sa snažíš uhádnuť krajinu podľa vlajky alebo
							hlavného mesta. Tiež umožnuje nastaviť krajiny podľa regionu.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Quiz-countries"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a className=" projects-a" href="https://quizool.netlify.app">
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>Nuxt 3</li>
							<li>VUE.js</li>
							<li>Tailwind CSS</li>
						</ul>
					</article>
				</section>
				{/* Weather app */}
				<section className="projects-sections ">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/weather_he7nOKepR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785341"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/weather_he7nOKepR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785341 400w,
							https://ik.imagekit.io/nollume/tr:w-600/weather_he7nOKepR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785341 600w,
							https://ik.imagekit.io/nollume/tr:w-800/weather_he7nOKepR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785341 800w,"
							alt="Weather app"
						/>
					</div>
					<article className="projects-article  ">
						<h4 className="font-bold text-xl  text-my-accent ">Weather app</h4>
						<p className="mb-2 ">
							Jednoduchá aplikácia ktorá zobrazuje momentálne počasie v okolí.
							Tiež umožňuje vyhľadávať počasie podľa zadaného mesta.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Current-weather-app"
								>
									Zobraziť kód
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>Tailwind CSS</li>
							<li>React</li>
							<li>Axios API</li>
						</ul>
					</article>
				</section>
				{/* Memory game */}
				<section className="projects-sections ">
					<div className="md:flex-[2]  ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/memoryGame_-AjLUoUV8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785501"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/memoryGame_-AjLUoUV8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785501 400w,
							https://ik.imagekit.io/nollume/tr:w-600/memoryGame_-AjLUoUV8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785501 600w,
							https://ik.imagekit.io/nollume/tr:w-800/memoryGame_-AjLUoUV8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785501 800w,"
							alt="Memory game"
						/>
					</div>
					<article className="projects-article  ">
						<h4 className="font-bold text-xl  text-my-accent ">Memory game</h4>
						<p className="mb-2 ">Pamäťová hra (pexeso).</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Memory-game"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://velvety-crepe-9c1e44.netlify.app"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>SCSS</li>
							<li>VUE.js</li>
							<li>Nuxt 3</li>
						</ul>
					</article>
				</section>

				{/* tip calculator app */}
				<section className="projects-sections ">
					<div className="md:flex-[2]  ">
						<img
							className=" w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/tipCalculator_w7g8KGIpb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/tipCalculator_w7g8KGIpb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 400w,
							https://ik.imagekit.io/nollume/tr:w-600/tipCalculator_w7g8KGIpb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 600w,
							https://ik.imagekit.io/nollume/tr:w-800/tipCalculator_w7g8KGIpb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 800w,
							"
							alt="tip calculator app desktop"
						/>
					</div>
					<article className="projects-article">
						<h4 className="font-bold text-xl  text-my-accent ">
							Tip calculator app
						</h4>
						<p className="mb-2 ">
							Responzívna aplikácia na prepočet prepitného/tringeltu medzi viac
							osôb.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/tip-calculator-app-main"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/tip-calculator-app-main/"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
						</ul>
					</article>
				</section>
				{/* Green page */}
				<section className="projects-sections">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/smartmockups_lb7shm0f_McDZ-q1mb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670063265996"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/smartmockups_lb7shm0f_McDZ-q1mb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670063265996 400w,
							https://ik.imagekit.io/nollume/tr:w-600/smartmockups_lb7shm0f_McDZ-q1mb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670063265996 600w,
							https://ik.imagekit.io/nollume/tr:w-800/smartmockups_lb7shm0f_McDZ-q1mb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670063265996 800w,"
							alt="Green page"
						/>
					</div>
					<article className="projects-article">
						<h4 className="font-bold text-xl  text-my-accent ">Green page</h4>
						<p className="mb-2 ">
							Responzívna stránka ktorá sa ovláda pomocou šípok do štyroch
							strán. Obsah stránky je len vymyslený.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/green-page"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://green-page.netlify.app/?fbclid=IwAR0TQjRQs5FUm57w8WWhlnfg3VuxbefjeS0zg8pwHm_3J0bWj6GtE73QmBc"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>SCSS</li>
							<li>JavaScript</li>
							<li>Vite</li>
						</ul>
					</article>
				</section>
				{/* todo */}
				<section className="projects-sections">
					<div className="md:flex-[2] ">
						<img
							className="  w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/todo_ioQDBKNHXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/todo_ioQDBKNHXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 400w,
							https://ik.imagekit.io/nollume/tr:w-600/todo_ioQDBKNHXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 600w,
							https://ik.imagekit.io/nollume/tr:w-800/todo_ioQDBKNHXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785508 800w,"
							alt="Todo app"
						/>
					</div>
					<article className="projects-article">
						<h4 className="font-bold text-xl  text-my-accent ">Todo app</h4>
						<p className="mb-2 ">
							Responzívna TODO aplikácia spravená vo VUE.js s light/dark módom.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/Todo-frontendmentor.io"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/Todo-frontendmentor.io/"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>SCSS</li>
							<li>VUE.js</li>
						</ul>
					</article>
				</section>

				{/* Comments section app */}
				<section className="projects-sections">
					<div className="md:flex-[2] ">
						<img
							className="w-full h-auto object-contain sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/commentSection_imhb-PyUY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785220"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/commentSection_imhb-PyUY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785220 400w,
							https://ik.imagekit.io/nollume/tr:w-600/commentSection_imhb-PyUY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785220 600w,
							https://ik.imagekit.io/nollume/tr:w-800/commentSection_imhb-PyUY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668944785220 800w,"
							alt="Comments section app"
						/>
					</div>
					<article className="projects-article ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Comments section app
						</h4>
						<p className="mb-2 ">
							Responzívna aplikácia front-end časť umožňujúca pridávať, mazať,
							upravovať, hodnotiť komentáre alebo príspevky.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/comments-section"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/comments-section/"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="projects-ul">
							<li>HTML</li>
							<li>SCSS</li>
							<li>JavaScript</li>
							<li>Webpack</li>
						</ul>
					</article>
				</section>
				<aside className=" grid place-items-center xl:col-span-2 relative">
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
