import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface LetterTileProps {
  letter: string;
  onPress: () => void;
}

export default function LetterTile({ letter, onPress }: LetterTileProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`aspect-square p-2 ${letter ? 'bg-slate-700' : 'bg-slate-600'} m-1 rounded-2xl justify-center items-center`}
      style={{ width: '30%' }}
    >
      <Text className="text-white text-4xl font-bold">{letter}</Text>
    </TouchableOpacity>
  );
}