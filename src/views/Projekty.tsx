import React from 'react'
// Import Swiper React components
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import login from '../assets/images/screencapture-nollu-9fc76-web-app-login-2022-09-16-13_34_54.png'
import nollu from '../assets/images/screencapture-nollu-9fc76-web-app-2022-09-16-14_29_53.png'
import contact from '../assets/images/screencapture-nollu-9fc76-web-app-contact-2022-09-16-14_25_42.png'
import notifications from '../assets/images/screencapture-nollu-9fc76-web-app-notifications-2022-09-16-14_15_55.png'
import profile from '../assets/images/screencapture-nollu-9fc76-web-app-profile-Vt5iyTYsLmHFyCyk9VqX-2022-09-16-14_30_32.png'
import chat from '../assets/images/screencapture-nollu-9fc76-web-app-person-RxZZeAPcpoYrkKQ3KyvlNnflqKE3-o8OmmJoTbQYSoE60ER4qxvQlA5j2-2022-09-16-14_41_26.png'
import weatherHome from '../assets/images/screencapture-localhost-3001-Current-weather-app-2022-10-03-12_24_30 (1).png'
import weatherByCity from '../assets/images/screencapture-localhost-3001-Find-by-city-2022-10-03-12_25_23 (1).png'

type Props = {}

const Projekty = (props: Props) => {
	return (
		<section id="Projekty" className="min-h-screen  pt-14">
			<h3 className="headline3 mb-4  px-1 z-40">projekty</h3>
			<div className="projects-container  grid grid-cols-1 gap-10 md:mx-8 md:gap-8 xl:grid-cols-2 xl:gap-x-12 ">
				<section className="projects-sections md:hidden xl:flex twoxl:hidden ">
					<Swiper
						className="md:flex-[2] sm:rounded-md"
						spaceBetween={5}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{ clickable: true }}
						slidesPerView={2.2}
					>
						<SwiperSlide>
							<img
								className=" w-full h-auto "
								src={login}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-full h-auto "
								src={nollu}
								alt="Nollu chat app"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<img
								className=" w-full h-auto "
								src={contact}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-full h-auto "
								src={notifications}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-full h-auto "
								src={profile}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
					</Swiper>

					<article className="projects-article  small:ml-4  ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Nollu chat app
						</h4>
						<p className="mb-2 ">
							Chat aplikácia iba mobilný dizajn. Umožňuje pridávať vyhľadávať
							priateľov, chatovať, upravovať profil, meniť fotku... Použitý
							firebase na databázu a autentifikáciu.
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
				<section className="projects-sections hidden md:flex  xl:hidden twoxl:flex">
					<Swiper
						className="md:flex-[2] sm:rounded-md"
						spaceBetween={5}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{ clickable: true }}
						slidesPerView={3.2}
					>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover "
								src={login}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover "
								src={nollu}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover"
								src={chat}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover "
								src={contact}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover "
								src={notifications}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover "
								src={profile}
								alt="Nollu chat app"
							/>
						</SwiperSlide>
					</Swiper>

					<article className="projects-article  small:ml-4 ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Nollu chat app
						</h4>
						<p className="mb-2 ">
							Chat aplikácia iba mobilný dizajn. Umožňuje pridávať vyhľadávať
							priateľov, chatovať, upravovať profil, meniť fotku... Použitý
							firebase na databázu a autentifikáciu.
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
						<ul className="projects-ul">
							<li>VUE.js</li>
							<li>Tailwind CSS</li>
							<li>Pinia</li>
							<li>Firebase</li>
							<li>Vite</li>
						</ul>
					</article>
				</section>
				<section className="projects-sections md:flex-row-reverse xl:flex-row">
					<div className="md:flex-[2] ">
						<img
							className=" w-auto h-full object-cover sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-tip-calculator-app-main-2022-09-15-16_03_08_ocSSlLZFu8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255175971"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-tip-calculator-app-main-2022-09-15-16_03_08_ocSSlLZFu8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255175971 400w,
							https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-tip-calculator-app-main-2022-09-15-16_03_08_ocSSlLZFu8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255175971 600w,
							https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-tip-calculator-app-main-2022-09-15-16_03_08_ocSSlLZFu8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255175971 800w,
							"
							alt="tip calculator app desktop"
						/>
					</div>
					<article className="projects-article  small:mr-4 small:ml-auto  xl:mr-0 xl:ml-4">
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
				<section className="projects-sections">
					<Swiper
						className="md:flex-[2] sm:rounded-md"
						spaceBetween={5}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{ clickable: true }}
						slidesPerView={1.1}
					>
						<SwiperSlide>
							<img
								className="  w-auto h-full object-cover"
								src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_58_D6crBYVo_t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249523"
								srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_58_D6crBYVo_t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249523 400w,
								https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_58_D6crBYVo_t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249523 600w,
								https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_58_D6crBYVo_t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249523 800w,"
								alt="Todo app"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="  w-auto h-full object-cover "
								src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_44_c0-LfGXTMZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249383"
								srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_44_c0-LfGXTMZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249383 400w,
								https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_44_c0-LfGXTMZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249383 600w,
								https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-Todo-frontendmentor-io-2022-09-15-16_35_44_c0-LfGXTMZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663256249383 800w,"
								alt="Todo app dark mode"
							/>
						</SwiperSlide>
					</Swiper>
					<article className="projects-article  small:ml-4 ">
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
				<section className="projects-sections md:flex-row-reverse xl:flex-row">
					<Swiper
						className=" md:flex-[2] sm:rounded-md"
						spaceBetween={5}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{ clickable: true }}
						slidesPerView={1.1}
					>
						<SwiperSlide>
							<img
								className=" w-auto h-full object-cover"
								src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Space-tourism-multi-page-website-2022-09-19-11_35_42_91szc7tes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663583971643"
								srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-Space-tourism-multi-page-website-2022-09-19-11_35_42_91szc7tes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663583971643 400w,
								https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Space-tourism-multi-page-website-2022-09-19-11_35_42_91szc7tes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663583971643 600w,
								https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-Space-tourism-multi-page-website-2022-09-19-11_35_42_91szc7tes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663583971643 800w,"
								alt="Space tourism multi page website"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="w-auto h-full object-cover"
								src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Space-tourism-multi-page-website-destination-moon-2022-09-19-11_40_36__1__6YjRRD2CJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663584077486"
								srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-Space-tourism-multi-page-website-destination-moon-2022-09-19-11_40_36__1__6YjRRD2CJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663584077486 400w,
								https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-Space-tourism-multi-page-website-destination-moon-2022-09-19-11_40_36__1__6YjRRD2CJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663584077486 600w,
								https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-Space-tourism-multi-page-website-destination-moon-2022-09-19-11_40_36__1__6YjRRD2CJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663584077486 800w,"
								alt="Space tourism multi page website"
							/>
						</SwiperSlide>
					</Swiper>
					<article className="projects-article  small:mr-4 small:ml-auto  xl:mr-0 xl:ml-4">
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
				<section className="projects-sections ">
					<div className=" md:flex-[2]">
						<img
							className="  w-auto h-full object-fill sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-intro-section-with-dropdown-navigation-main-2022-09-15-16_06_07_Pq5DOckaKW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176349"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-intro-section-with-dropdown-navigation-main-2022-09-15-16_06_07_Pq5DOckaKW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176349 400w,
							https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-intro-section-with-dropdown-navigation-main-2022-09-15-16_06_07_Pq5DOckaKW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176349 600w,
							https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-intro-section-with-dropdown-navigation-main-2022-09-15-16_06_07_Pq5DOckaKW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176349 800w,"
							alt="Intro section with dropdown navigation main"
						/>
					</div>
					<article className="projects-article  small:ml-4 ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Intro section with dropdown navigation main
						</h4>
						<p className="mb-2 ">
							Jednoduchá responzívna stránka s dropdown menu.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/intro-section-with-dropdown-navigation-main"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/intro-section-with-dropdown-navigation-main/"
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
				<section className="projects-sections md:flex-row-reverse xl:flex-row">
					<div className="md:flex-[2]">
						<img
							className="  w-auto h-full object-cover sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-comments-section-2022-09-15-16_07_34_nc8fufyZh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176298"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-comments-section-2022-09-15-16_07_34_nc8fufyZh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176298 400w,
							https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-comments-section-2022-09-15-16_07_34_nc8fufyZh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176298 600w,
							https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-comments-section-2022-09-15-16_07_34_nc8fufyZh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255176298 800w,"
							alt="Comments section app"
						/>
					</div>
					<article className="projects-article  small:mr-4 small:ml-auto  xl:mr-0 xl:ml-4">
						<h4 className="font-bold text-xl  text-my-accent ">
							Comments section app
						</h4>
						<p className="mb-2 ">
							Responzívna aplikácia umožňujúca pridávať/mazať/upravovať/hodnotiť
							komentáre alebo príspevky.
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

				<section className="projects-sections ">
					<div className=" md:flex-[2]">
						<img
							className="  w-auto h-full object-cover sm:rounded-md"
							src="https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-advice-generator-app-2022-09-15-16_05_25_qDsrtxjEy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255177090"
							srcSet="https://ik.imagekit.io/nollume/tr:w-400/screencapture-nollume-github-io-advice-generator-app-2022-09-15-16_05_25_qDsrtxjEy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255177090 400w,
							https://ik.imagekit.io/nollume/tr:w-600/screencapture-nollume-github-io-advice-generator-app-2022-09-15-16_05_25_qDsrtxjEy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255177090 600w,
							https://ik.imagekit.io/nollume/tr:w-800/screencapture-nollume-github-io-advice-generator-app-2022-09-15-16_05_25_qDsrtxjEy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663255177090 800w,"
							alt="Advice generator"
						/>
					</div>
					<article className="projects-article  small:ml-4 ">
						<h4 className="font-bold text-xl  text-my-accent ">
							Advice generator
						</h4>
						<p className="mb-2 ">
							Jednoduchá aplikácia ktorá generuje zaujímavé rady pomocou Fetch
							API.
						</p>
						<div className="flex flex-col">
							<div>
								<a
									className=" projects-a"
									href="https://github.com/Nollume/advice_generator-app"
								>
									Zobraziť kód
								</a>
							</div>
							<div>
								<a
									className=" projects-a"
									href="https://nollume.github.io/advice_generator-app/"
								>
									Zobraziť projekt
								</a>
							</div>
						</div>
						<ul className="  projects-ul">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
						</ul>
					</article>
				</section>
				<section className="projects-sections md:flex-row-reverse xl:flex-row">
					<div className="md:flex-[2] flex w-full items-center justify-evenly">
						<img
							className=" w-[48%] h-auto sm:rounded-md"
							src={weatherHome}
							alt="Weather app"
						/>
						<img
							className="w-[48%] h-auto sm:rounded-md"
							src={weatherByCity}
							alt="Weather app"
						/>
					</div>
					<article className="projects-article  small:mr-4 small:ml-auto  xl:mr-0 xl:ml-4">
						<h4 className="font-bold text-xl  text-my-accent ">Weather app</h4>
						<p className="mb-2 ">
							Jednoduchá aplikácia ktorá zobrazuje momentálne počasie v okolí.
							Tiež umožňuje vyhľadávať počasie podľa mesta.
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
			</div>
		</section>
	)
}

export default Projekty
