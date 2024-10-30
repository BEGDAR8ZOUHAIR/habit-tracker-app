import React, { useState } from 'react';
import { View, SafeAreaView, Pressable, TouchableOpacity, Alert } from 'react-native';
import { Text, makeStyles, useTheme } from "@rneui/themed";
import { useRouter } from 'expo-router';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
	const styles = useStyles();
	const theme = useTheme();
	const router = useRouter();
	const auth = getAuth();

	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		if (!email || !password) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		setLoading(true);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			// Store user's name locally if needed
			if (userCredential.user.displayName) {
				await AsyncStorage.setItem('userName', userCredential.user.displayName);
			}

			router.push('/home');
		} catch (error: any) {
			let errorMessage = 'An error occurred during login';
			if (error.code === 'auth/user-not-found') {
				errorMessage = 'No account found with this email';
			} else if (error.code === 'auth/wrong-password') {
				errorMessage = 'Incorrect password';
			} else if (error.code === 'auth/invalid-email') {
				errorMessage = 'Invalid email address';
			} else if (error.code === 'auth/user-disabled') {
				errorMessage = 'This account has been disabled';
			}
			Alert.alert('Error', errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleSignIn = async () => {
		Alert.alert('Coming Soon', 'Google Sign-in will be implemented in the next update');
	};

	const handleForgotPassword = () => {
		router.push('/');
	};

	const handleRegister = () => {
		router.push('/register');
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
				<Text style={styles.title}>Welcome Back</Text>
				<Text style={styles.description}>
					Please log in to continue to your habit tracker.
				</Text>
				<View style={styles.inputContainer}>
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
					onPress={handleLogin}
					style={styles.loginButton}
					contentStyle={{ paddingVertical: theme.theme.spacingVertical.medium }}
					loading={loading}
					disabled={loading}
				>
					{loading ? 'Logging in...' : 'Log In'}
				</Button>

				<Pressable onPress={handleForgotPassword}>
					<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
				</Pressable>

				<Pressable onPress={handleRegister}>
					<Text style={styles.registerText}>Don't have an account? Register here</Text>
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
	loginButton: {
		marginVertical: theme.spacingVertical.extraLarge,
		borderRadius: theme.border.medium,
		width: '100%',
		marginBottom: theme.spacingVertical.medium,
		backgroundColor: theme.colors.primary,
	},
	forgotPasswordText: {
		color: theme.colors.primary,
		fontSize: theme.fontSize.callout,
		fontFamily: theme.fontFamily.medium,
		textAlign: 'center',
		marginTop: theme.spacingVertical.small,
	},
	registerText: {
		color: theme.colors.primary,
		fontSize: theme.fontSize.callout,
		fontFamily: theme.fontFamily.medium,
		textAlign: 'center',
		marginTop: theme.spacingVertical.small,
	},
}));
