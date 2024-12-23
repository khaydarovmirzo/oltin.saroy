
import { Contact, Home, ListVideo, Rss } from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '', name: 'Bosh sahifa', icon: Home },
	{ route: 'courses', name: 'Menyu', icon: ListVideo },
	{ route: 'blogs', name: 'Obzor', icon: Rss },
	{ route: 'contact', name: 'Raqamlar', icon: Contact },
]

// export const lngs = [
// 	{ route: 'en', label: 'English' },
// 	{ route: 'uz', label: "O'zbekcha" },
// 	{ route: 'ru', label: 'Русский' },
// 	{ route: 'tr', label: 'Türkçe' },
// ]


export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

// export const instructors = [
// 	{
// 		name: 'Chris Impley',
// 		image:
// 			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
// 		job: 'Web Developer',
// 	},
// 	{
// 		name: 'Thomas Winter',
// 		image:
// 			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
// 		job: 'Photographer',
// 	},
// 	{
// 		name: 'Emma Watson',
// 		image:
// 			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
// 		job: 'Digital Marketer',
// 	},
// 	{
// 		name: 'John Doe',
// 		image:
// 			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
// 		job: 'Designer',
// 	},
// ]

export const courses = [
	{
		title: 'JavaScript',
		previewImage:
			'/oltin_1.jpg',
		author: {
			image:
				'/oltin_2.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
		level: 'Beginner',
	},
	{
		title: 'ReactJS',
		previewImage:
			'/oltin_3.jpg',
		author: {
			image:
				'/oltin_1.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
		level: 'Intermidate',
	},
	{
		title: 'VueJS',
		previewImage:
			'/oltin.png',
		author: {
			image:
				'/oltin.png',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Telegram BOT',
		previewImage:
			'/oltin.png',
		author: {
			image:
				'/oltin.png',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
	{
		title: 'React Native',
		previewImage:
			'/oltin.png',
		author: {
			image:
				'/oltin.png',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Foundation',
		previewImage:
			'/oltin.png',
		author: {
			image:
				'/oltin.png',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
]