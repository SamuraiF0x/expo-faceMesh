import { Easing } from "react-native-reanimated";
import { createAnimations } from "@tamagui/animations-moti";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { createFont, createTamagui, createTokens } from "tamagui";

export const animations = createAnimations({
	bouncy: {
		type: "spring",
		damping: 10,
		mass: 0.9,
		stiffness: 100,
	},
	lazy: {
		type: "spring",
		damping: 20,
		stiffness: 60,
	},
	quick: {
		type: "spring",
		damping: 60,
		mass: 1.2,
		stiffness: 250,
	},
	elastic: {
		type: "spring",
		damping: 20,
		mass: 0.5,
		stiffness: 250,
	},
	smoothTimed: {
		type: "timing",
		duration: 200,
		easing: Easing.bezier(0.25, 0.1, 0.25, 1),
	},
});

const martianMonoFont = createFont({
	family: "MartianMono",
	size: {
		1: 13, // s
		2: 14, // m
		3: 15, // l
		4: 16, // xl
		5: 15, // H6
		6: 17, // H5
		7: 18, // H4
		8: 21, // H3
		9: 25, // H2
		10: 28, // H1
		true: 15,
	},
	lineHeight: {
		1: 15, // s
		2: 16, // m
		3: 17, // l
		4: 18, // xl
		5: 17, // H6
		6: 19, // H5
		7: 20, // H4
		8: 23, // H3
		9: 27, // H2
		10: 30, // H1
	},
	weight: {
		1: 200, // s - xl
		5: 400, // H6 - H1
	},
	letterSpacing: {
		1: 0, // H6 - H2
		10: 0.5, // H1
	},
	face: {
		200: { normal: "MartianMono_200ExtraLight" },
		400: { normal: "MartianMono_400Regular" },
	},
});
const spaceGroteskFont = createFont({
	family: "SpaceGrotesk",
	size: {
		1: 13, // s
		2: 14, // m
		3: 15, // l
		4: 16, // xl
		5: 15, // H6
		6: 17, // H5
		7: 18, // H4
		8: 21, // H3
		9: 25, // H2
		10: 28, // H1
		true: 15,
	},
	lineHeight: {
		1: 15, // s
		2: 16, // m
		3: 17, // l
		4: 18, // xl
		5: 17, // H6
		6: 19, // H5
		7: 20, // H4
		8: 23, // H3
		9: 27, // H2
		10: 30, // H1
	},
	weight: {
		1: 500, // s - xl
		5: 700, // H6 - H1
	},
	letterSpacing: {
		1: 0, // H6 - H2
		10: 0.5, // H1
	},
	face: {
		500: { normal: "SpaceGrotesk_500Medium" },
		700: { normal: "SpaceGrotesk_700Bold" },
	},
});

const startSize = 45;

const size = {
	0: 1,
	1: 2,
	2: 5,
	3: 10,
	4: 15,
	5: 20,
	6: startSize, // TINY - 45 -> 45
	7: Math.round(startSize + startSize / 2), // SMALL - 67,5 -> 68
	8: Math.round(startSize * 1.618), // MEDIUM - 72,81 -> 73
	9: Math.round(startSize * 1.618 + startSize / 2), // BIG - 95,31 -> 95
	10: Math.round(startSize * 1.618 ** 2), // LARGE - 117,81 -> 118
	11: Math.round(2 * (startSize * 1.618 ** 2)), // EXTRA-LARGE - 235,62 -> 236
	true: startSize,
};

const startRadius = 15;

const radius = {
	0: 0,
	1: 5,
	2: 7,
	3: 8,
	4: 10,
	5: 12,
	6: startRadius, // TINY - 15
	7: Math.round(startRadius + startRadius / 2), // SMALL - 23
	8: Math.round(startRadius * 1.618), // MEDIUM - 24
	9: Math.round(startRadius * 1.618 + startRadius / 2), // BIG - 32
	10: Math.round(startRadius * 1.618 ** 2), // LARGE - 39
	11: "100%",
	true: startRadius,
};

export const accentColors = {
	yellow: "#F9DC5C",
	green: "#06D6A0",
	greenTransparent: "#06D6A080",
	blue: "#3185FC",
	blueTransparent: "#3185FC80",
	red: "#E40066",
	redTransparent: "#E4006680",
	orange: "#F95738",

	purple: "#A000D2B3", //dont use opacity in hex color
	blue1: " #735CDDB3",
	blue2: "#45B9EA",
};

export const tokens = createTokens({
	size,
	space: { ...size },
	radius,
	zIndex: { 0: 0, 1: 100 },
	color: {
		//dark
		spaceBlue: "#080B1C",
		spaceBlueTransparent: "#080B1C80",
		spaceBlue2: "#1E132A",

		//light
		spaceLatte: "#F4FAFF",
		spaceLatteTransparent: "#F4FAFF80",

		//shared
		fusion: "#2b205e", //light text & dark box
		oceanBlue: "#01295F", //light text & dark box
		beige: "#FAF0CA", //dark txt & light box
		lavanda: "#947BD3", //primary
		lavanda50: "#947BD380", //primary

		...accentColors,
	},
});

const media = {
	xs: { maxWidth: 660 },
	gtXs: { minWidth: 660 + 1 },
	sm: { maxWidth: 860 },
	gtSm: { minWidth: 860 + 1 },
	md: { maxWidth: 980 },
	gtMd: { minWidth: 980 + 1 },
	lg: { maxWidth: 1120 },
	gtLg: { minWidth: 1120 + 1 },
	short: { maxHeight: 820 },
	tall: { minHeight: 820 },
	hoverNone: { hover: "none" },
	pointerCoarse: { pointer: "coarse" },
};

const config = createTamagui({
	defaultTheme: "dark",
	size,
	tokens,
	animations,
	fonts: {
		heading: spaceGroteskFont,
		body: martianMonoFont,
	},
	media: createMedia({ ...media }),
	themes: {
		light: {
			bgTop: tokens.color.beige,
			contrast: tokens.color.oceanBlue,
			primary: tokens.color.lavanda,
			accent: tokens.color.blue,
			success: tokens.color.green,
			danger: tokens.color.red,
			warning: tokens.color.yellow,

			color: tokens.color.oceanBlue,
			colorHover: tokens.color.blue,
			colorPress: tokens.color.green,
			colorFocus: tokens.color.green,
			link: tokens.color.purple,

			placeholderColor: tokens.color.lavanda50,
			placeholderTextColor: tokens.color.lavanda50,

			background: tokens.color.spaceLatte,
			backgroundStrong: tokens.color.blue,
			backgroundTransparent: tokens.color.spaceLatteTransparent,
			backgroundHover: tokens.color.blue,
			backgroundPress: tokens.color.green,
			backgroundFocus: tokens.color.yellow,

			borderColor: tokens.color.purple,
			borderColorHover: tokens.color.lavanda,
			borderColorPress: tokens.color.purple,
			borderColorFocus: tokens.color.green,

			shadowColor: tokens.color.lavanda,
			shadowColorHover: tokens.color.blue,
			shadowColorPress: tokens.color.green,
			shadowColorFocus: tokens.color.yellow,
		},

		dark: {
			bgTop: tokens.color.spaceBlue2,
			contrast: tokens.color.spaceLatte,
			primary: tokens.color.lavanda,
			accent: tokens.color.blue,
			success: tokens.color.green,
			danger: tokens.color.red,
			warning: tokens.color.yellow,

			color: tokens.color.spaceLatte,
			colorHover: tokens.color.blue,
			colorPress: tokens.color.purple,
			colorFocus: tokens.color.purple,
			link: tokens.color.purple,

			placeholderColor: tokens.color.lavanda50,
			placeholderTextColor: tokens.color.lavanda50,

			background: tokens.color.spaceBlue,
			backgroundStrong: tokens.color.blue,
			backgroundTransparent: tokens.color.spaceBlueTransparent,
			backgroundHover: tokens.color.oceanBlue,
			backgroundPress: tokens.color.blueTransparent,
			backgroundFocus: tokens.color.purple,

			borderColor: tokens.color.blueTransparent,
			borderColorHover: tokens.color.lavanda50,
			borderColorPress: tokens.color.lavanda50,
			borderColorFocus: tokens.color.oceanBlue,

			shadowColor: tokens.color.purple,
			shadowColorHover: tokens.color.blue,
			shadowColorPress: tokens.color.green,
			shadowColorFocus: tokens.color.yellow,
		},
	},
	shorthands,
});

export type AppConfig = typeof config;

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}

	interface ThemeValueFallback {
		value: never;
	}
}

export default config;
