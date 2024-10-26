import { Link, Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
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
  BounceInRight,
  SlideOutLeft,
  BounceOutLeft,
  SlideInRight,
} from 'react-native-reanimated';
import theme from '@/theme';

const onboardingSteps = [
  {
    icon: 'snowflake',
    title: 'Welcome #DEVMay',
    description: 'Daily React Native tutorials during #DEVMay',
  },
  {
    icon: 'people-arrows',
    title: 'Learn and grow together',
    description: 'Learn by building 24 projects with React Native and Expo',
  },
  {
    icon: 'book-reader',
    title: 'Education for Children',
    description:
      'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',
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
    router.push('/register');  
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
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color={theme.theme.colors.primary}
            />
          </Animated.View>

          <View style={styles.footer}>
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
    alignSelf: 'center',
    margin: theme.spacingVertical.large,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.largeTitle,
    fontFamily: 'Quicksand',
    letterSpacing: 1.3,
  },
  description: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.title2,
    fontFamily: 'Quicksand',
  },
  footer: {
    marginTop: 'auto',
  },

  buttonsRow: {
    marginTop: theme.spacingVertical.extraLarge,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacingHorizontal.large,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: theme.colors.secondary,
    fontFamily: 'Quicksand',
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
