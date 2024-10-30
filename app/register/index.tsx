import React, { useState } from 'react';
import { View, SafeAreaView, Pressable, TouchableOpacity, Alert } from 'react-native';
import { Text, makeStyles, useTheme } from "@rneui/themed";
import { useRouter } from 'expo-router';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
	const styles = useStyles();
	const theme = useTheme();
	const router = useRouter();
	const auth = getAuth();

	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleContinue = async () => {
		if (!name || !email || !password) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		setLoading(true);
		try {
			// Create user with email and password
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			// Update user profile with name
			await updateProfile(userCredential.user, {
				displayName: name
			});

			// Store the user's name locally
			await AsyncStorage.setItem('userName', name);

			Alert.alert('Success', 'Account created successfully!');
			router.push('/home');
		} catch (error: any) {
			let errorMessage = 'An error occurred during registration';
			if (error.code === 'auth/email-already-in-use') {
				errorMessage = 'This email is already registered';
			} else if (error.code === 'auth/invalid-email') {
				errorMessage = 'Invalid email address';
			} else if (error.code === 'auth/weak-password') {
				errorMessage = 'Password should be at least 6 characters';
			}
			Alert.alert('Error', errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleSignUp = async () => {
		Alert.alert('Coming Soon', 'Google Sign-in will be implemented in the next update');
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
				<Text style={styles.title}>Let's get started</Text>
				<Text style={styles.description}>
					Sign up now for the habit tracker app and embark on a journey of positive change!
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						mode="outlined"
						label="Name"
						value={name}
						onChangeText={setName}
						style={styles.input}
						placeholderTextColor={theme.theme.colors.textSubtitle}
						outlineColor={theme.theme.colors.primary}
						activeOutlineColor={theme.theme.colors.primary}
						theme={{ roundness: theme.theme.border.medium }}
					/>
					<TextInput
						mode="outlined"
						label="Email"
						value={email}
						onChangeText={setEmail}
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
							value={password}
							onChangeText={setPassword}
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
					loading={loading}
					disabled={loading}
					style={styles.continueButton}
					contentStyle={{ paddingVertical: theme.theme.spacingVertical.medium }}
				>
					Continue
				</Button>

				<Button
					mode="outlined"
					icon="google"
					onPress={handleGoogleSignUp}
					disabled={loading}
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
	// Your existing styles remain the same
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