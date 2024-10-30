import { View } from 'react-native';
import { Text, makeStyles } from "@rneui/themed";
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';

export default function HomeScreen() {
  const getHabits = async () => {
    const habits = await firestore().collection('habits').get();
  }
  useEffect(() => {
    console.log("getHabits", getHabits());
  })
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Home Screen</Text>
    </View>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacingHorizontal.large,
    paddingVertical: theme.spacingVertical.extraLarge,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.largeTitle,
    color: theme.colors.textPrimary,
    marginTop: theme.spacingVertical.extraLarge,
    alignSelf: "center",
    textAlign: "center",
  },
}));
