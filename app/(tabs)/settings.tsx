import React, { useEffect } from 'react';
import { View, SafeAreaView, Pressable, Image, Alert } from 'react-native';
import { Text, makeStyles, useTheme, Avatar, Icon } from "@rneui/themed";
import { useRouter } from 'expo-router';
import { TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition, faArrowLeftLong, faBell, faChevronRight, faCircleInfo, faGear, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut } from "firebase/auth";

export default function SettingsScreen() {
  const styles = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const auth = getAuth();


  const handleEditProfile = () => {
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Logged Out", "You have been logged out successfully.");
        router.replace('/login');
      })
      .catch((error) => {
        Alert.alert("Logout Error", error.message);
      });
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

      <View style={styles.profileContainer}>
        <Avatar
          size="large"
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with actual user profile image URL
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{auth.currentUser?.displayName}</Text>
          <Text style={styles.userEmail}>{auth.currentUser?.email}</Text>
        </View>
        <Pressable onPress={handleEditProfile}>
          <Icon name="edit" type="material" />
        </Pressable>
      </View>

      <View style={styles.optionsContainer}>
        <OptionItem icon={faGear} title="General" onPress={() => router.push('/')} />
        <OptionItem icon={faBell} title="Notifications" onPress={() => router.push('/')} />
        <OptionItem icon={faLanguage} title="Language" onPress={() => router.push('/')} />
        <OptionItem icon={faCircleInfo} title="About" onPress={() => router.push('/')} />
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </Pressable>
    </SafeAreaView>
  );
}

function OptionItem({ icon, title, onPress }: { icon: IconDefinition, title: string, onPress: () => void }) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Pressable style={styles.optionItem} onPress={onPress}>
      <FontAwesomeIcon style={styles.optionIcon} icon={icon as unknown as IconDefinition} color={theme.theme.colors.textPrimary} size={24} />
      <Text style={styles.optionText}>{title}</Text>
      <FontAwesomeIcon style={styles.optionArrow} icon={faChevronRight as IconDefinition} color={theme.theme.colors.textPrimary} size={24} />
    </Pressable>
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
    padding: theme.spacingHorizontal.large,
    paddingHorizontal: theme.spacingHorizontal.medium,
    marginBottom: theme.spacingVertical.extraLarge,

  },
  headerTitle: {
    marginVertical: theme.spacingVertical.extraLarge,
    fontSize: theme.fontSize.headline,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacingHorizontal.small,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacingHorizontal.large,
    marginBottom: theme.spacingVertical.large,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.border.large,
    marginHorizontal: theme.spacingHorizontal.large,

  },
  userInfo: {
    flex: 1,
    marginLeft: theme.spacingHorizontal.medium,
  },
  userName: {
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textPrimary,
  },
  userEmail: {
    fontSize: theme.fontSize.body,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.textSubtitle,
  },
  optionsContainer: {
    marginHorizontal: theme.spacingHorizontal.large,
    gap: theme.spacingVertical.large,

  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacingVertical.large,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.border.large,

  },
  optionIcon: {
    marginLeft: theme.spacingHorizontal.large,
  },
  optionArrow: {
    marginRight: theme.spacingHorizontal.large,
  },
  optionText: {
    flex: 1,
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacingHorizontal.large,
  },
  logoutButton: {
    marginTop: theme.spacingVertical.large,
    backgroundColor: theme.colors.error,
    borderRadius: theme.border.large,
    paddingVertical: theme.spacingVertical.large,
    alignItems: 'center',
    marginHorizontal: theme.spacingHorizontal.large,
  },
  logoutText: {
    color: theme.colors.background,
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.bold,
  },
}));

