import React, { useRef, useEffect, useMemo } from 'react'
import useDarkMode from './useDarkMode'

type Props = {}

const ThemeIcon = (props: Props) => {
	const [darkTheme, setDarkTheme] = useDarkMode()
	const checkInput = useRef<HTMLInputElement>(null)

	const handleMode = () => {
		setDarkTheme(!darkTheme)
	}
	useEffect(() => {
		!darkTheme
			? checkInput.current?.setAttribute('checked', '')
			: checkInput.current?.removeAttribute('checked')
	}, [])

	return (
		<label className=" w-14 h-8 relative p-1 scale-75 md:top-2 lg:scale-100">
			<input
				type="checkbox"
				onInput={handleMode}
				className="toggle-mode opacity-0 w-0 h-0"
				ref={checkInput}
			/>
			<span className="slider border-2 border-my-light absolute bg-my-dark inset-0 cursor-pointer duration-500 rounded-full before:absolute before:h-6 before:w-6 before:rounded-full  before:translate-x-0.5 before:translate-y-0.5 before:bg-yellow-500 before:duration-500 "></span>
		</label>
	)
}

export default ThemeIcon
