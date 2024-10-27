import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';
import { Text, makeStyles, useTheme } from "@rneui/themed";

import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight,
} from 'react-native-reanimated';

const onboardingSteps = [
  {
    image: require('../assets/images/one1.png'),
    title: 'Track Your Daily Habits',
    description: 'Easily log and monitor your habits to stay on top of your goals.',
  },
  {
    image: require('../assets/images/tow2.png'),
    title: 'Build Consistency',
    description: 'Set reminders and notifications to maintain your streaks.',
  },
  {
    image: require('../assets/images/one1.png'),
    title: 'Analyze Your Progress',
    description: 'View detailed insights to see your improvement over time.',
  },
];


export default function Onboarding() {
  const [screenIndex, setScreenIndex] = useState(0);
  const styles = useStyles();
  const theme = useTheme();

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    router.push('/getStarted');
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? theme.theme.colors.primary : theme.theme.colors.textSecondary },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Animated.Image
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.image}
              source={data.image}
            />
          </Animated.View>
          <Animated.Text
            entering={SlideInRight}
            exiting={SlideOutLeft}
            style={styles.title}
          >
            {data.title}
          </Animated.Text>
          <Animated.Text
            entering={SlideInRight.delay(50)}
            exiting={SlideOutLeft}
            style={styles.description}
          >
            {data.description}
          </Animated.Text>
          <View style={styles.buttonsRow}>
            <Text onPress={endOnboarding} style={[styles.buttonText, { color: theme.theme.colors.textPrimary }]}>
              Skip
            </Text>

            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const useStyles = makeStyles((theme) => ({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  pageContent: {
    padding: theme.spacingHorizontal.large,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginTop: theme.spacingVertical.extraLarge,
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.largeTitle,
    fontFamily: theme.fontFamily.bold,
    marginTop: theme.spacingVertical.giant3,
  },
  description: {
    color: theme.colors.textSubtitle,
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.semiBold,
    marginTop: theme.spacingVertical.extraLarge,
  },
  buttonsRow: {
    marginTop: theme.spacingVertical.giant3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacingHorizontal.large,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    fontFamily: theme.fontFamily.bold,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: theme.colors.secondary,
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.title,
    padding: theme.spacingVertical.medium,
    paddingHorizontal: theme.spacingHorizontal.large,
  },

  // steps
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
}));
