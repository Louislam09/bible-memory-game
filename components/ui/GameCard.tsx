import React from 'react';
import { View, Text } from 'react-native';

interface GameCardProps {
  children: React.ReactNode;
  hint: string;
  word: string;
}

export default function GameCard({ children, hint, word }: GameCardProps) {
  return (
    <View className="rounded-3xl bg-red-500 p-4">
      {/* Game Content */}
      <View className="rounded-2xl bg-[#80263f] p-4">{children}</View>
      {/* Word */}
      <View className="mt-2 items-center justify-center rounded-full border-b-4 border-r-4 border-b-slate-800 border-r-slate-900 bg-[#80263f] px-4 py-3">
        <Text className="text-center text-2xl font-bold text-[#F8D3AB]">{word}</Text>
      </View>
    </View>
  );
}
