import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface CardProps {
  card: { text: string; reference: string };
  isFlipped: boolean;
  onPress: () => void;
  width: number;
}

export default function Card({ card, isFlipped, onPress, width }: CardProps) {
  return (
    <TouchableOpacity
      className={`m-1 items-center justify-center rounded-lg ${
        isFlipped ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'
      }`}
      style={{ width, height: width * 1.5 }}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text
        className={`p-1 text-center ${
          isFlipped ? 'text-white' : 'text-gray-800 dark:text-gray-200'
        }`}
        style={{ fontSize: width * 0.2 }}>
        {isFlipped ? card.text : '?'}
      </Text>
    </TouchableOpacity>
  );
}
