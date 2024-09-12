import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface LetterTileProps {
  letter: string | number;
  onPress: () => void;
}

export default function LetterTile({ letter, onPress }: LetterTileProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={`m-1 aspect-square items-center justify-center rounded-2xl p-2
      ${letter ? 'border-b-4 border-r-4 border-b-slate-800 border-r-slate-900 bg-slate-700' : 'bg-slate-600'}
      transition-transform active:translate-y-1`}
      style={{ width: '30%' }}>
      <Text className="text-4xl font-bold text-white">{letter}</Text>
    </TouchableOpacity>
  );
}
