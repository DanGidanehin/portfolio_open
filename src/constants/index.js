import {
	mobile,
	ui,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	github,
	telegram,
	instagram,
	discord,
	linkedin,
	git,
	figma,
	docker,
	kyivyouth,
	portfolio,
	cv,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "motivation",
		title: "For Recruiters",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "UI Creator",
		icon: ui,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const media = [
  {
    title: "LinkedIn",
    icon: linkedin,
    media_link: "https://www.linkedin.com/in/денис-зуб-5a1a732ba",
  },
  {
    title: "Resume",
    icon: cv,
    media_link:
      "https://docs.google.com/document/d/1AXpKRm4E84adm7YpBYjr6R-VqtVNAbbF3-FQqXUxAFM/edit?usp=sharing",
  },
  {
    title: "GitHub",
    icon: github,
    media_link: "https://github.com/DanGidanehin",
  },
	{
		title: "Telegram",
		icon: telegram,
		media_link: "https://t.me/DanGidanehin",
	},
	{
		title: "Instagram",
		icon: instagram,
		media_link: "https://www.instagram.com/den.geon.master?igsh=ZGlmb2MyNTR3eW5p&utm_source=qr",
	},
	{
		title: "discord",
		icon: discord,
		media_link: "https://discordapp.com/users/981960276670832701",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React Native Developer",
		company_name: "Kyiv Youth Council under the Kyiv City Council",
		icon: kyivyouth,
		iconBg: "#002a8c",
		date: "June 2023 - Present",
		points: [
			"Developed and maintained cross-platform applications using React Native, Expo and other related technologies.",
			"Participated in team building and setting up development processes.",
			"Implementing responsive design and ensuring cross-platform compatibility.",
		],
	},
];

const projects = [
	{
		name: "Portfolio",
		description: "Source code of my portfolio website.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/DanGidanehin/portfolio_open",
	},
];

export { services, technologies, experiences, projects, media };
