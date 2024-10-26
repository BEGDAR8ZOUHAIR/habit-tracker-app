import {  View  } from 'react-native';
import { Text, makeStyles } from "@rneui/themed";

export default function HomeScreen() {
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
