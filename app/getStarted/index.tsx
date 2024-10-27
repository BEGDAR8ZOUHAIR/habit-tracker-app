import React from 'react';
import { View, SafeAreaView, Pressable, Image } from 'react-native';
import { Text, makeStyles, useTheme } from "@rneui/themed";
import { useRouter } from 'expo-router';

export default function GetStarted() {
	const styles = useStyles();
	const theme = useTheme();
	const router = useRouter();

	const handleGetStarted = () => {
		router.push('/register');
	};

	const handleLogin = () => {
		router.push('/login');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image source={require('@/assets/images/one1.png')} style={styles.image} />

				<Text style={styles.title}>Begin, track, conquer daily</Text>

				<Text style={styles.description}>
					Embrace each day, track your progress, and conquer your goals with the Habit Tracker app, making daily success a habit.
				</Text>

				<Pressable style={styles.getStartedButton} onPress={handleGetStarted}>
					<Text style={styles.getStartedButtonText}>Let’s get started</Text>
				</Pressable>

				<Pressable onPress={handleLogin}>
					<Text style={styles.loginText}>I’m already have an account</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		justifyContent: 'center',
	},
	content: {
		alignItems: 'center',
		paddingHorizontal: theme.spacingHorizontal.large,
	},
	image: {
		width: '100%',
		height: 400,
		resizeMode: 'contain',
		marginBottom: theme.spacingVertical.extraLarge,
	},
	title: {
		fontSize: theme.fontSize.largeTitle,
		fontFamily: theme.fontFamily.bold,
		color: theme.colors.primary,
		marginBottom: theme.spacingVertical.medium,
	},
	description: {
		fontSize: theme.fontSize.headline,
		fontFamily: theme.fontFamily.semiBold,
		color: theme.colors.textSubtitle,
		marginBottom: theme.spacingVertical.large,
	},
	getStartedButton: {
		backgroundColor: theme.colors.primary,
		borderRadius: theme.border.medium,
		paddingVertical: theme.spacingVertical.large,
		alignItems: 'center',
		width: '100%',
		marginTop: theme.spacingVertical.extraLarge,
	},
	getStartedButtonText: {
		color: theme.colors.background,
		fontSize: theme.fontSize.title,
		fontFamily: theme.fontFamily.bold,
	},
	loginText: {
		color: theme.colors.primary,
		fontSize: theme.fontSize.headline,
		fontFamily: theme.fontFamily.semiBold,
		textAlign: 'center',
		marginTop: theme.spacingVertical.medium,
	},
}));
