import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, Animated, Easing } from 'react-native';

interface LetterTileProps {
  onPress: () => void;
  card: { text: string; reference: string };
  isFlipped: boolean;
  isMatched: boolean;
  index: number;
  flippedIndexes: number[];
}

export default function LetterTile({
  index,
  card,
  isFlipped,
  onPress,
  isMatched,
  flippedIndexes,
}: LetterTileProps) {
  const matchedStyle = 'border-r-4 border-b-[#e2ac8b] border-r-[#e2ac8b] bg-[#F8D3AB]';
  const defaultStyle = 'border-b-slate-800 border-r-slate-900 bg-slate-700';
  const [firstFlippedIndex] = flippedIndexes;
  const isTooltip = firstFlippedIndex === index;
  const [showText, setShowText] = useState(false);

  // Animation values
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const opacityAnimation = useRef(new Animated.Value(1)).current;

  // Trigger animation when isFlipped changes
  useEffect(() => {
    if (isFlipped) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnimation, {
            toValue: 1.1,
            duration: 150,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(opacityAnimation, {
            toValue: 0.8,
            duration: 150,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(flipAnimation, {
          toValue: 180,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.cubic),
        }),
        Animated.parallel([
          Animated.timing(scaleAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(opacityAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setShowText(true);
      });
    } else {
      // setShowText(false);
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnimation, {
            toValue: 0.95,
            duration: 150,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(opacityAnimation, {
            toValue: 0.9,
            duration: 150,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(flipAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.cubic),
        }),
        Animated.parallel([
          Animated.timing(scaleAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(opacityAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setShowText(false);
      });
    }
  }, [isFlipped]);

  // Interpolate for the flip animation
  const interpolatedRotateAnimation = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  // Counter-rotation for text to keep it readable
  const interpolatedTextRotateAnimation = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '-180deg'],
  });

  // Animated styles
  const animatedStyle = {
    transform: [{ rotateY: interpolatedRotateAnimation }, { scale: scaleAnimation }],
    opacity: opacityAnimation,
  };

  const textAnimatedStyle = {
    transform: [{ rotateY: interpolatedTextRotateAnimation }],
  };

  return (
    <Animated.View style={[{ width: '33.33%' }, animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        className={`m-1 aspect-square items-center justify-center rounded-2xl border-b-4 border-r-4 p-2 transition-transform active:translate-y-1 ${
          isMatched ? matchedStyle : defaultStyle
        }`}>
        <Animated.Text
          style={textAnimatedStyle}
          className={`${!showText && isFlipped && 'hidden'} ${
            isTooltip ? 'text-xs' : isFlipped ? 'text-lg' : 'text-4xl'
          } text-center font-bold ${isMatched ? 'text-[#8B4C39]' : 'text-white'}`}>
          {isFlipped ? (
            isTooltip ? (
              card.reference
            ) : (
              card.text
            )
          ) : (
            <Ionicons name="help" size={30} color="#fff" />
          )}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
