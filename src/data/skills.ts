import vite from '../assets/icons/vitejs.svg'
import html from '../assets/icons/icons8-html-5-48.png'
import cssIcon from '../assets/icons/icons8-css3-48.png'
import javaScript from '../assets/icons/icons8-javascript-48.png'
import vueJs from '../assets/icons/icons8-vue-js-48.png'
import react from '../assets/icons/icons8-react-100.png'
import jquery from '../assets/icons/icons8-jquery-50.png'
import typeScript from '../assets/icons/icons8-typescript-48.png'
import tailwind from '../assets/icons/icons8-tailwind-css-48.png'

import sass from '../assets/icons/icons8-sass-48.png'
import git from '../assets/icons/icons8-git-48.png'
import firebase from '../assets/icons/icons8-google-firebase-console-48.png'
import gitHub from '../assets/icons/icons8-github-48.png'
import VScode from '../assets/icons/icons8-visual-studio-code-2019-48.png'
import webpack from '../assets/icons/icons8-webpack-48.png'
import nuxt from '../assets/icons/colored-logo.svg'
import vitest from '../assets/icons/vitest-seeklogo.com.svg'
import pinia from '../assets/icons/pinia-seeklogo.com.svg'

import nodeJs from '../assets/icons/nodejs-icon.svg'
import express from '../assets/icons/expressjs-icon.svg'
import mongoDB from '../assets/icons/mongodb-icon.svg'
import jest from '../assets/icons/jest-svgrepo-com.svg'
import postman from '../assets/icons/getpostman-icon.svg'

interface skillsTypes {
	id: number
	name: string
	image: string
	skill: string
	noSkill: string
}
interface skillContainer {
	name: string
	skills: skillsTypes[]
}

const skills: skillContainer[] = [
	{
		name: 'Front-end',
		skills: [
			{ id: 1, name: 'HTML', image: html, skill: '||||', noSkill: '|' },
			{ id: 2, name: 'CSS', image: cssIcon, skill: '||||', noSkill: '|' },
			{
				id: 3,
				name: 'JavaScript',
				image: javaScript,
				skill: '|||',
				noSkill: '||',
			},
			{
				id: 4,
				name: 'TypeScript',
				image: typeScript,
				skill: '||',
				noSkill: '|||',
			},
			{ id: 5, name: 'VUE.js', image: vueJs, skill: '||||', noSkill: '|' },
			{ id: 6, name: 'Nuxt 3', image: nuxt, skill: '|||', noSkill: '||' },
			{ id: 7, name: 'React', image: react, skill: '|||', noSkill: '||' },
			{
				id: 8,
				name: 'Tailwind',
				image: tailwind,
				skill: '||||',
				noSkill: '|',
			},
			{ id: 9, name: 'Sass(Scss)', image: sass, skill: '|||', noSkill: '||' },
			{ id: 10, name: 'jQuery', image: jquery, skill: '||', noSkill: '|||' },
		],
	},
	{
		name: 'Back-end',
		skills: [
			{ id: 1, name: 'Node.js', image: nodeJs, skill: '||', noSkill: '|||' },
			{ id: 2, name: 'Express', image: express, skill: '|||', noSkill: '||' },
			{
				id: 3,
				name: 'MongoDB',
				image: mongoDB,
				skill: '||',
				noSkill: '|||',
			},
			{
				id: 4,
				name: 'Firebase',
				image: firebase,
				skill: '||',
				noSkill: '|||',
			},
		],
	},
	{
		name: 'Nástroje',
		skills: [
			{ id: 1, name: 'Git', image: git, skill: '|||', noSkill: '||' },
			{ id: 2, name: 'GitHub', image: gitHub, skill: '|||', noSkill: '||' },

			{ id: 5, name: 'Pinia', image: pinia, skill: '||||', noSkill: '|' },
			{ id: 6, name: 'Vite', image: vite, skill: '||', noSkill: '|||' },
			{ id: 7, name: 'Vitest', image: vitest, skill: '||', noSkill: '|||' },
			{ id: 8, name: 'Jest', image: jest, skill: '||', noSkill: '|||' },
			{ id: 9, name: 'Webpack', image: webpack, skill: '||', noSkill: '|||' },
			{ id: 10, name: 'VScode', image: VScode, skill: '||||', noSkill: '|' },
			{ id: 11, name: 'Postman', image: postman, skill: '|||', noSkill: '||' },
		],
	},
]

export default skills
