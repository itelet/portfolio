import SolidTaste from '../assets/images/solid-taste.png'
import RecipeParser from '../assets/images/recipe-parser.png'
import Portfolio from '../assets/images/portfolio.png'
import FreelanceWindow from '../assets/images/freelance-window.png'
import FreelanceInsulation from '../assets/images/freelance-insulation.png'

import SolidTasteHighRes from '../assets/images/solid-taste-high-res.png'
import PortfolioHighRes from '../assets/images/portfolio-high-res.png'
import FreelanceWindowHighRes from '../assets/images/freelance-window-high-res.png'
import FreelanceInsulationHighRes from '../assets/images/freelance-insulation-high-res.png'

import RecipeParserVideo from '../assets/images/recipe-parser-video.mp4';

export default [
  {
		img: SolidTaste,
    title: "Solid Taste",
    description: "Solid Taste is a meal planner app featuring shopping list generation, dark/light mode, search, filtering, multilingual support, measurement unit selection, and more...",
		link: "solidtaste",
		additional: {
			demo: null,
			sourceCode: null,
			imgHighRes: SolidTasteHighRes, 
			longDescription: "A meal planner app built with React Native, Expo, and Firebase.",
			overviewText: "Designed to simplify weekly meal organization by helping users plan meals, generate shopping lists, and manage recipes in one place.\n\n In publicly available recipes, ingredients used and the steps to make it are almost fully copyright-free, only sentimental values/tips are copyrightable (and the image of course).\nThis is why I use my own parser (available in another post), that removes any unneccessary values from steps. For the images, I use Flux AI Pro's text-to-image model.",
			status: "Currently in closed alpha testing on Play store, IOS deploy hasn't been started yet",
			features: [
				"Custom vector morphing animations",
				"Shopping list generation",
				"Dark/light mode",
				"Recipe search and filtering",
				"Multilingual support",
				"Measurement unit selection",
			],
			techStack: {
					frontend: [
						"React Native",
						"Expo (Cross-platform framework)",
						"React Navigation (Stack, Tabs)",
						"NativeWind (Tailwind CSS)"
					],
					backend: [
						"Firebase Firestore (Cloud storage)",
						"AsyncStorage (Local storage)",
						"Google Sign-In",
						"Firebase Auth"
					],
					features: [
						"i18next",
						"react-i18next (Multilingual support)"
					],
					devTools: [
						"Jest",
						"TypeScript"
					]
				},
			lastUpdate: "March 6th, 2025"
		},
  },
  {
		img: Portfolio,
		title: "Portfolio",
		link: "portfolio",
		description: "This website was created using React with Tailwind CSS for styling. The source code is available on GitHub.",
		additional: {
			demo: null,
			sourceCode: "https://github.com/itelet/portfolio",
			imgHighRes: PortfolioHighRes,
			longDescription: "A portfolio website showcasing personal projects, skills, and experience, built with modern frontend technologies.",
			overviewText: "This portfolio website serves as a digital showcase of projects, highlighting technical skills and design aesthetics. It is fully responsive, lightweight, and optimized for performance.",
			status: "Currently live with ongoing improvements",
			features: [
				"Responsive design",
				"Dark/light mode",
				"Smooth page transitions with Framer Motion",
				"Custom animations",
				"Tech stack icons display",
				"Multi-page navigation"
			],
			techStack: {
				frontend: [
					"React",
					"Tailwind CSS",
					"Framer Motion",
					"Wouter (Routing)"
				],
				backend: [""],
				features: [
					"react-responsive",
					"react-responsive-carousel"
				],
				devTools: [
					"TypeScript",
				]
			},
			lastUpdate: "March 6th, 2025"
		},
	},	
  {
		img: FreelanceWindow,
		title: "Price calculator",
		link: "windowfreelance",
		description: "Freelance project done for a window installing company. It’s integrated into a WP + Elementor website via Custom Code and PHP hooks.",
		additional: {
			demo: "https://znablak.hu/arkalkulator/",
			sourceCode: null,
			imgHighRes: FreelanceWindowHighRes,
			longDescription: "A highly customized price calculator for a window installing company, designed to simplify the quotation process for customers while automating summary emails.",
			overviewText: "It was created in pure JS, with custom UI handling approaches. The calculator manages complex relationships between different window options, ensuring that only possible configurations are selectable. It hooks onto Elementor's form send hook, automatically sending an email summary of the selected items. The app is filled with custom event handlers to maintain state and UI consistency.",
			status: "Live and in production",
			features: [
				"Custom UI handling",
				"Complex conditional option selections",
				"Email summary generation",
				"Elementor integration",
				"Event-driven architecture"
			],
			techStack: {
				frontend: [
					"Vanilla JavaScript",
					"CSS"
				],
				backend: [
					"PHP (WordPress hooks)"
				],
				features: [
					"Elementor Custom Code",
					"Email sending integration"
				],
				devTools: [
				]
			},
			lastUpdate: "March 6th, 2025"
		},
	},	
	{
		img: FreelanceInsulation,
		title: "Price calculator",
		link: "insulationfreelance",
		description: "Freelance project done for an insulation installing company. It’s integrated into a WP + Elementor website via Custom Code and PHP hooks.",
		additional: {
			demo: null,
			sourceCode: null,
			imgHighRes: FreelanceInsulationHighRes,
			longDescription: "A custom price calculator for an insulation installing company, capable of handling complex data relations and providing real-time pricing updates.",
			overviewText: "Multiple insulation installation places, multiple types, and a vast amount of data with complex relationships. The calculator dynamically updates the UI based on user selections and performs most of the calculations on the backend using PHP. It hooks into Elementor's form send hook, automatically sending a detailed summary email. The UI handler is custom-built in pure JS, leveraging numerous event handlers for seamless performance and real-time updates. To my knowledge, there is nothing like this currently on the Hungarian market.",
			status: "Live and in production",
			features: [
				"Similar algorithm to bin-packing algorithm",
				"Constant UI updates",
				"Email summary generation",
				"Elementor integration",
				"Custom DOM handling"
			],
			techStack: {
				frontend: [
					"Vanilla JavaScript",
					"CSS"
				],
				backend: [
					"PHP (WordPress hooks)",
				],
				features: [
					"Email sending integration",
				],
				devTools: [
				]
			},
			lastUpdate: "March 6th, 2025"
		},
	},	
	{
		img: RecipeParser,
		title: "Recipe parser",
		link: "recipeparser",
		description: "Standalone Electron app with an automatic recipe parsing script. It can scrape ingredient/unit pairs from cooking steps and supports Google Translate and DeepL translations.",
		additional: {
			demo: null,
			sourceCode: null,
			video: RecipeParserVideo,
			longDescription: "A standalone Electron app designed for automatically parsing recipes, supporting ingredient-unit detection and multi-language translations with API integrations.",
			overviewText: "The division of elements between ingredient/unit pairs from the recipes is credited to @strangetom/ingredient-parser package on GitHub. I've forked the project and added an API call receiver to it. DeepL and Google Translate are integrated into step, ingredient, title, and unit translations. The app features a clean UI that allows manual corrections to any individual part of the recipes after scraping. It also fetches translation configurations from Firestore (SolidTaste project) and compares the results. If an entry is already saved, no new entry is created.",
			status: "Used internally in SolidTaste project",
			features: [
				"Automatic ingredient-unit pair detection",
				"Google Translate and DeepL API integration",
				"Manual corrections with clean UI",
				"Firestore integration for translation memory",
				"Real-time UI updates"
			],
			techStack: {
				frontend: [
					"React",
					"Ant Design",
					"Tailwind CSS"
				],
				backend: [
					"Firebase",
					"Firestore",
					"Firebase Admin SDK",
					"Node.js (Electron Main Process)"
				],
				features: [
					"Cheerio (Web scraping)",
					"Axios (API requests)",
					"dotenv (Environment variables)"
				],
				devTools: [
					"Electron Builder",
					"Jest",
				]
			},
			lastUpdate: "March 6th, 2025"
		},
	}	
];
