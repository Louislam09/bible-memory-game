import React from 'react';
import { View, Text } from 'react-native';

interface GameCardProps {
  children: React.ReactNode;
  hint: string;
  word: string;
}

export default function GameCard({ children, hint, word }: GameCardProps) {
  return (
    <View className="flex-1 bg-red-500 rounded-3xl p-4">
      {/* Eyes */}
      <View className="flex-row justify-center mb-4">
        <View className="w-8 h-8 bg-white rounded-full mx-2 flex items-center justify-center">
          <View className="w-4 h-4 bg-black rounded-full" />
        </View>
        <View className="w-8 h-8 bg-white rounded-full mx-2 flex items-center justify-center">
          <View className="w-4 h-4 bg-black rounded-full" />
        </View>
      </View>

      {/* Game Content */}
      <View className="flex-1 bg-red-600 rounded-2xl p-4">
        {children}
      </View>

      {/* Hint */}
      <View className="bg-white rounded-full py-2 px-4 mt-4">
        <Text className="text-center font-bold text-slate-800">{hint}</Text>
      </View>

      {/* Word */}
      <Text className="text-white text-center text-lg font-bold mt-2">{word}</Text>
    </View>
  );
}