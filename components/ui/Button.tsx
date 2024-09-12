import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  text?: string;
  color: string;
}

export default function Button({ onPress, icon, text, color }: ButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={`bg-${color} rounded-full px-6 py-3 flex-row items-center`}
    >
      <Ionicons name={icon} size={24} color="#fff" />
      {text && <Text className="text-white font-bold ml-2">{text}</Text>}
    </TouchableOpacity>
  );
}