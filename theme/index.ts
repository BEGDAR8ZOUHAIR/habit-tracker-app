import { createTheme } from '@rneui/themed';

declare module '@rneui/themed' {
	export interface Colors {
		textPrimary: string;
		textSecondary: string;
		textButton: string;
		inputPlaceholder: string;
		border: string;
		oraGreen: string;
		textSubtitle: string;
		oraBorder: string;
		oraBackground: string;
		morningGlory: string;
		mischka: string;
		whisper: string;
		athensGray: string;

		successPrimary: string;
		successSecondary: string;
		warningPrimary: string;
		warningSecondary: string;
		infoPrimary: string;
		infoSecondary: string;
		errorPrimary: string;
		errorSecondary: string;
		greenSecondary: string;
		chipDark: string;
		chipLight: string;
		backgroundSecondary: string;
		oraRed: string;
		oraBlack: string;
		orange: string;
		
		blackPrimary: string;
		blackSecondary: string;
		blackTertiary: string;
		grayText: string,
		onSurface: string,

		alabasterGrey: string;
		manatee: string;
		lilacMurmur: string;

		alphaWhite: string;

		rawBlack: string;
		rawWhite: string;
	}
	export interface Theme {
		fontFamily: {
			bold: string;
			semiBold: string;
			regular: string;
			medium: string;
			light: string;
		};
		fontSize: {
			largeTitle: number;
			title1: number;
			title2: number;
			title: number;
			headline: number;
			body: number;
			callout: number;
			subHeadline: number;
			footNote: number;
			caption1: number;
			caption2: number;
			caption3: number;
			placeHolder: number;
		};
		spacingHorizontal: {
			extraSmall: number;
			small: number;
			medium: number;
			large: number;
			extraLarge: number;
			giant: number;
			giant2: number;
			giant3: number;
		};
		spacingVertical: {
			extraSmall: number;
			small: number;
			medium: number;
			large: number;
			extraLarge: number;
			giant: number;
			giant2: number;
			giant3: number;
		};
		border: {
			small: number;
			medium: number;
			large: number;
			extraLarge: number;
			round: number;
		};
	}
}

const theme = createTheme({
	lightColors: {
		primary: '#5F6CE2',
		secondary: '#F2F2F7',
		textPrimary: '#1f1f1f',
		textSecondary: '#9E9E9E',
		textSubtitle: '#48484A',
		textButton: "#5E6175",
		inputPlaceholder: '#a1a1a1',
		border: '#E1E1E8',
		oraGreen: '#34C759',
		oraRed: '#FF3B30',
		oraBorder: "#FF6961",
		divider: '#AEAEB2',
		disabled: 'background: rgba(255, 255, 255, 0.6)',
		backgroundSecondary: '#F9F9F9',
		oraBackground: '#F4F5FC',
		morningGlory: "#96DED1",
		mischka: "#D2D2DC",
		whisper: "#F0F0F8",
		athensGray: "#E9EAF1",
		white: "#fff",
		successPrimary: '#1BC100',
		successSecondary: '#E3FFD6',
		warningPrimary: '#FFC530',
		warningSecondary: '#FFE8C7',
		infoPrimary: '#1C1C1E',
		infoSecondary: '#F2F2F7',
		errorPrimary: '#FF3B30',
		errorSecondary: '#FFCAC7',
		chipDark: 'background: rgba(0, 0, 0, 0.6)',
		chipLight: 'background: rgba(0, 0, 0, 0.4)',
		grey0: '#808080',



		blackPrimary: '#4F5458',
		blackSecondary: '#A6A6AF',
		blackTertiary: '#AEAEB2',
		greenSecondary: 'rgba(32, 179, 124, 0.25)',
		oraBlack: '#0E1217',

		alabasterGrey: "#FAFAFA",
		manatee: "#8E8E93",
		lilacMurmur: "#E5E5EA",
		grayText: "#A9AFC4",
		onSurface: "#26304F",

		alphaWhite: 'background: rgba(255, 255, 255, 0.25)',

		rawBlack: '#000',
		rawWhite: '#fff',
	},
	darkColors: {
		oraBackground: "#1f1f1f",
		primary: '#FF3B30',
		secondary: '#F2F2F7',
		oraGreen: '#34C759',
		inputPlaceholder: '#AEAEB2',
		textPrimary: '#fff',
		textSecondary: '#646466',
		textSubtitle: '#48484A',
		border: '#F2F2F7',
		disabled: 'background: rgba(255, 255, 255, 0.6)',
		successPrimary: '#1BC100',
		successSecondary: '#E3FFD6',
		warningPrimary: '#FFC530',
		warningSecondary: '#FFE8C7',
		infoPrimary: '#1C1C1E',
		infoSecondary: '#F2F2F7',
		errorPrimary: '#FF3B30',
		errorSecondary: '#FFCAC7',
		orange: '#FF9500',
		chipDark: 'background: rgba(0, 0, 0, 0.6)',
		backgroundSecondary: '#F9F9F9',
		oraBlack: '#0E1217',

		blackPrimary: '#4F5458',
		blackSecondary: '#A6A6AF',
		blackTertiary: '#AEAEB2',
		greenSecondary: 'rgba(32, 179, 124, 0.25)',
		grayText: "#A9AFC4",
		onSurface: "#26304F",

		rawBlack: '#000',
		rawWhite: '#fff',
	},
	fontFamily: {
		bold: 'Quicksand-Bold',
		semiBold: 'Quicksand-SemiBold',
		regular: 'Quicksand-Regular',
		medium: 'Quicksand-Medium',
		light: 'Quicksand-Light',

	},
	fontSize: {
		largeTitle: 34,
		title1: 28, 
		title2: 22, 
		title: 20, 
		headline: 17, 
		callout: 16, 
	},
	spacingHorizontal: {
		extraSmall: 4, 
		small: 8, 
		medium: 14, 
		large: 24, 
		extraLarge: 32, 
		giant: 40, 
		giant2: 60, 
		giant3: 80,
	},
	spacingVertical: {
		extraSmall: 4, 
		small: 8, 
		medium: 14, 
		large: 24, 
		extraLarge: 32, 
		giant: 40, 
		giant2: 60, 
		giant3: 80, 
	},
	border: {
		small: 4, 
		medium: 8, 
		large: 12, 
		extraLarge: 24, 
		round: 100, 
	},
});

export default theme;
