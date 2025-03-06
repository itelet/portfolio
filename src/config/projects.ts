import SolidTaste from '../assets/images/solid-taste.png'
import SolidTasteHighRes from '../assets/images/solid-taste-high-res.png'
import RecipeParser from '../assets/images/recipe-parser.png'
import Portfolio from '../assets/images/portfolio.png'
import FreelanceWindow from '../assets/images/freelance-window.png'
import FreelanceInsulation from '../assets/images/freelance-insulation.png'

export default [
  {
		img: SolidTaste,
    title: "Solid Taste",
    description: "Solid Taste is a meal planner app featuring shopping list generation, dark/light mode, search, filtering, multilingual support, measurement unit selection, and more...",
		link: "solidtaste",
		additional: {
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
    description: "This website was created using React with tailwind styling. The source code is available on github.",
  },
  {
		img: FreelanceWindow,
    title: "Price calculator",
		link: "windowfreelance",
    description: "Freelance project done for a window installing company. It’s integrated into a WP + Elementor website via <Custom Code> and PHP hooks.",
  },
  {
		img: FreelanceInsulation,
    title: "Price calculator",
		link: "insulationfreelance",
    description: "Freelance project done for an insulation installing company. It’s integrated into a WP + Elementor website via <Custom Code> and PHP hooks.",
  },
	{
		img: RecipeParser,
		title: "Recipe parser",
		link: "recipeparser",
		description: "Standalone Electron app with an automatic recipe parsing script. It can scrape ingredient/unit pairs from cooking steps, also has Google Translate and deepL translation support.",
	},
];
