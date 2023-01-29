import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import texting from '../assets/images/texting.gif'

type Props = {}

const Kontakt = (props: Props) => {
	const form = useRef<HTMLFormElement>(null)
	const btnSubmit = useRef<HTMLInputElement>(null)
	const [error, setError] = useState('')
	const [btnValue, setbtnValue] = useState('Odoslať')
	const [loading, setloading] = useState(false)

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setloading(true)

		if (btnSubmit.current !== null) {
			btnSubmit.current?.setAttribute('disabled', 'disabled')
			btnSubmit.current.style.cursor = 'wait'
		}

		if (form.current !== null) {
			emailjs
				.sendForm(
					'service_fcc61gd',
					'template_pi8pfn1',
					form.current,
					process.env.REACT_APP_RAPID_API_KEY
				)
				.then(
					() => {
						setbtnValue('Správa Odoslaná')
						setloading(false)

						if (form.current !== null) {
							form.current.reset()
						}

						setTimeout(() => {
							setbtnValue('Odoslať')
							if (btnSubmit.current !== null) {
								btnSubmit.current?.removeAttribute('disabled')
								btnSubmit.current.style.cursor = 'pointer'
							}
						}, 4500)
					},
					(error) => {
						setError(error.text)
					}
				)
		}
	}
	return (
		<section
			id="Kontakt"
			className="mx-4 min-h-screen flex flex-col justify-between gap-4  pb-8  pt-14 md:mx-8 lg:min-h-min"
		>
			<h3 className="headline3    px-1 z-40 ">Kontakt</h3>

			<div className="my-8  md:hidden text-my-light mx-auto   relative after:absolute after:inset-0 after:bg-my-accent after:-bottom-4 after:-right-4 medium:after:-bottom-8 medium:after:-right-8 after:top-4 medium:after:top-8 after:left-4 medium:after:left-8 after:-z-10 before:absolute before:inset-0 before:my-gradient before:-top-4 medium:before:-top-8 before:-left-4 medium:before:-left-8 before:bottom-4 medium:before:bottom-8 before:right-4 medium:before:right-8 before:-z-10">
				<img
					className="w-[14rem] h-auto "
					src="https://ik.imagekit.io/nollume/tr:w-400/altumcode-fPPwHFn6Eis-unsplash__1__0yyEkmxTn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663788976468"
					alt="creek"
				/>
				<article className="absolute bottom-0 bg-my-bgDark/50 text-shadow p-4 w-full  text-center shadow-md rounded-t-md">
					<p>Banská Bystrica</p>
					<p>marek.dorotovic@gmail.com</p>
					<p>0904563647</p>
				</article>
			</div>

			<form
				ref={form}
				onSubmit={sendEmail}
				className=" p-4 w-full text-my-light bg-my-dark/80 backdrop-blur rounded-md md:my-16  md:flex-1 md:flex md:items-center md:px-16 lg:py-16 lg:flex-row-reverse"
			>
			
				<div className="flex flex-col text-shadow  medium:items-center md:flex-[1.5] relative lg:flex-1">
					<h4 className="font-bold text-xl text-center md:mr-auto mb-4  lg:mx-auto">
						Kontaktujte ma
					</h4>
					<div className="medium:w-3/4 md:mr-auto   lg:mx-auto">
						<label
							className=" text-my-accent cursor-pointer hover:text-my-accentHover"
							htmlFor="user-name"
						>
							Meno
						</label>
						<input
							className="shadow-inner bg-my-light w-full border border-my-dark rounded-md  px-2 py-1 text-my-dark focus:outline-none focus:border-my-accent  valid:outline-none "
							type="text"
							name="user_name"
							id="user-name"
							required
						/>
					</div>
					<div className="medium:w-3/4 md:mr-auto   lg:mx-auto">
						<label
							className=" text-my-accent cursor-pointer hover:text-my-accentHover"
							htmlFor="user-email"
						>
							Email
						</label>
						<input
							className="shadow-inner bg-my-light w-full border border-my-dark rounded-md  px-2 py-1 text-my-dark focus:outline-none focus:border-my-accent  valid:outline-none "
							type="email"
							name="user_email"
							id="user-email"
							required
						/>
					</div>
					<div className="medium:w-3/4 md:mr-auto   lg:mx-auto">
						<label
							className=" text-my-accent cursor-pointer hover:text-my-accentHover"
							htmlFor="message"
						>
							Správa
						</label>
						<textarea
							className="shadow-inner bg-my-light w-full min-h-[6rem] border border-my-dark rounded-md  px-2 py-1 text-my-dark focus:outline-none focus:border-my-accent  valid:outline-none"
							name="message"
							id="message"
							required
						></textarea>
					</div>

					<input
						ref={btnSubmit}
						type="submit"
						value={btnValue}
						className=" btn py-2 cursor-pointer medium:w-3/4 mt-4 md:mr-auto  lg:mx-auto"
					/>
					{loading && (
						<img
							src={texting}
							className="absolute w-14 h-14 right-5 lg:right-0 lg:top-4"
							alt="loading icon"
						/>
					)}
					{error.length > 0 && (
						<p className="text-xs text-center md:mr-auto  lg:mx-auto">
							{error}
						</p>
					)}
				</div>
				<div className="hidden   text-my-light  p-4 rounded-md  md:flex md:flex-col md:gap-8 md:items-center md:flex-1 lg:flex-1">
					<div className=" mx-auto  relative after:absolute after:inset-0 after:bg-my-accent after:-bottom-8 after:-right-8 after:top-8 after:left-8 after:-z-10 before:absolute before:inset-0 before:my-gradient before:-top-8 before:-left-8 before:bottom-8 before:right-8 before:-z-10">
						<img
							className="w-[18.75rem] h-auto "
							src="https://ik.imagekit.io/nollume/tr:w-400/altumcode-fPPwHFn6Eis-unsplash__1__0yyEkmxTn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663788976468"
							alt="creek"
						/>
						<article className="absolute bottom-0 bg-my-bgDark/50 text-shadow p-4 w-full  text-center shadow-md rounded-t-md">
							<p>Banská Bystrica</p>
							<p>marek.dorotovic@gmail.com</p>
							<p>0904563647</p>
						</article>
					</div>
				</div>
			</form>
		</section>
	)
}

export default Kontakt
