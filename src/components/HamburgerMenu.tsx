import React from 'react'

type Props = {
	top: boolean
	openNav: boolean
	handleToggleMenu: () => void
}

const HamburgerMenu = (props: Props) => {
	const { top, openNav, handleToggleMenu } = props
	return (
		<div
			onClick={handleToggleMenu}
			className=" m-2 relative flex justify-center items-center w-8 h-8 cursor-pointer transition-all duration-500 ease-in-out z-50 md:hidden"
		>
			{(() => {
				if (top) {
					return (
						<button
							className={!openNav ? 'burger-btn ' : 'cross-btn '}
						></button>
					)
				} else if (!top && openNav) {
					return (
						<button
							className={!openNav ? 'burger-btn ' : 'cross-btn '}
						></button>
					)
				} else {
					return (
						<button
							className={
								!openNav
									? 'burger-btn bg-my-light after:bg-my-light before:bg-my-light'
									: 'cross-btn bg-my-light after:bg-my-light before:bg-my-light'
							}
						></button>
					)
				}
			})()}
		</div>
	)
}

export default HamburgerMenu
