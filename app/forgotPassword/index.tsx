import { useState } from 'react';
import { View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { Text, makeStyles, useTheme } from "@rneui/themed";
import { useRouter } from 'expo-router';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function ForgotPasswordScreen() {
	const styles = useStyles();
	const theme = useTheme();
	const router = useRouter();

	const [isPasswordVisible, setPasswordVisible] = useState(false);

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
				<Text style={styles.title}>Forgot Password</Text>
				<Text style={styles.description}>Enter your email to reset your password.</Text>
				<View style={styles.inputContainer}>
					<TextInput
						label="Email"
						mode="outlined"
						keyboardType="email-address"
						autoCapitalize="none"
						style={styles.input}
					/>
				</View>
				<Button
					mode="contained"
					style={styles.button}
					onPress={() => router.push('/login')}
				>
					Send
				</Button>
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
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: theme.colors.textPrimary,
	},
	description: {
		marginTop: 8,
		marginBottom: 16,
		fontSize: 16,
		color: theme.colors.textSecondary,
	},
	content: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	inputContainer: {
		marginBottom: 16,
	},
	input: {
		fontSize: 16,
		color: theme.colors.textPrimary,
	},
	button: {
		marginTop: 16,
	},
	loginText: {
		fontSize: 16,
		color: theme.colors.primary,
		textAlign: 'center',
	},
}));