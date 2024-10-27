import React, { useState } from 'react';
import { View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { Text, makeStyles, useTheme } from "@rneui/themed";
import { useRouter } from 'expo-router';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function RegisterScreen() {
	const styles = useStyles();
	const theme = useTheme();
	const router = useRouter();

	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const handleContinue = () => {
		router.push('/home');
	};

	const handleGoogleSignUp = () => {
		// Handle Google sign-up logic	
	};

	const handleLogin = () => {
		router.push('/login');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableRipple onPress={() => router.back()}>
					<FontAwesomeIcon
						icon={faArrowLeftLong as IconDefinition}
						color={theme.theme.colors.textPrimary}
						size={30}
					/>
				</TouchableRipple>
			</View>

			<View style={styles.content}>
				<Text style={styles.title}>Let’s get started</Text>
				<Text style={styles.description}>
					Sign up now for the habit tracker app and embark on a journey of positive change!
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						mode="outlined"
						label="Name"
						style={styles.input}
						placeholderTextColor={theme.theme.colors.textSubtitle}
						outlineColor={theme.theme.colors.primary}
						activeOutlineColor={theme.theme.colors.primary}
						theme={{ roundness: theme.theme.border.medium }}
					/>
					<TextInput
						mode="outlined"
						label="Email"
						style={styles.input}
						placeholderTextColor={theme.theme.colors.textSubtitle}
						keyboardType="email-address"
						autoCapitalize="none"
						outlineColor={theme.theme.colors.primary}
						activeOutlineColor={theme.theme.colors.primary}
						theme={{ roundness: theme.theme.border.medium }}
					/>
					<View style={styles.passwordContainer}>
						<TextInput
							mode="outlined"
							label="Password"
							style={styles.input}
							placeholderTextColor={theme.theme.colors.textSubtitle}
							secureTextEntry={!isPasswordVisible}
							autoCapitalize="none"
							outlineColor={theme.theme.colors.primary}
							activeOutlineColor={theme.theme.colors.primary}
							theme={{ roundness: theme.theme.border.medium }}
						/>
						<TouchableOpacity
							style={styles.eyeIcon}
							onPress={() => setPasswordVisible(!isPasswordVisible)}
						>
							<FontAwesomeIcon
								icon={isPasswordVisible ? faEye : faEyeSlash as IconDefinition}
								size={24}
								color={theme.theme.colors.textSubtitle}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<Button
					mode="contained"
					onPress={handleContinue}
					style={styles.continueButton}
					contentStyle={{ paddingVertical: theme.theme.spacingVertical.medium }}
				>
					Continue
				</Button>

				<Button
					mode="outlined"
					icon="google"
					onPress={handleGoogleSignUp}
					style={styles.googleButton}
					contentStyle={{ paddingVertical: theme.theme.spacingVertical.medium }}
					labelStyle={styles.googleButtonText}
				>
					Sign up with Google
				</Button>

				<Pressable onPress={handleLogin}>
					<Text style={styles.loginText}>I already have an account</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	header: {
		marginBottom: theme.spacingVertical.extraLarge,
		marginHorizontal: theme.spacingHorizontal.large,
		alignItems: 'flex-start',

	},
	content: {
		paddingHorizontal: theme.spacingHorizontal.large,
		marginVertical: theme.spacingVertical.extraLarge,
		marginTop: theme.spacingVertical.extraLarge,
	},
	title: {
		fontSize: theme.fontSize.largeTitle,
		fontFamily: theme.fontFamily.bold,
		color: theme.colors.primary,
		marginTop: theme.spacingVertical.extraLarge,
	},
	description: {
		fontSize: theme.fontSize.headline,
		fontFamily: theme.fontFamily.semiBold,
		marginBottom: theme.spacingVertical.extraLarge,
		color: theme.colors.textSubtitle,
		marginTop: theme.spacingVertical.large,
	},
	inputContainer: {
		marginBottom: theme.spacingVertical.extraLarge,
		marginHorizontal: theme.spacingHorizontal.medium,
	},
	passwordContainer: {
		position: 'relative',
		width: '100%',
	},
	input: {
		width: '100%',
		marginBottom: theme.spacingVertical.medium,
		backgroundColor: theme.colors.background,
		height: 50,
	},
	eyeIcon: {
		position: 'absolute',
		right: 15,
		top: 18,
	},
	continueButton: {
		marginVertical: theme.spacingVertical.extraLarge,
		borderRadius: theme.border.medium,
		width: '100%',
		marginBottom: theme.spacingVertical.medium,
		backgroundColor: theme.colors.primary,
	},
	googleButton: {
		borderColor: theme.colors.primary,
		borderRadius: theme.border.medium,
		width: '100%',
		marginBottom: theme.spacingVertical.medium,
		backgroundColor: theme.colors.background,
		borderWidth: 2,
	},
	googleButtonText: {
		color: theme.colors.primary,
		fontSize: theme.fontSize.callout,
		fontFamily: theme.fontFamily.bold,
	},
	loginText: {
		color: theme.colors.primary,
		fontSize: theme.fontSize.callout,
		fontFamily: theme.fontFamily.medium,
		textAlign: 'center',
		marginTop: theme.spacingVertical.small,
	},
}));
