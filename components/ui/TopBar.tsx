import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TopBarProps {
  level: number;
  stars: number;
  points: number;
}

export default function TopBar({ level, stars, points }: TopBarProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-row items-center bg-slate-700 rounded-full px-3 py-1">
        <Ionicons name="layers-outline" size={20} color="#fff" />
        <Text className="text-white ml-2 font-bold">Level {level}</Text>
      </View>
      <View className="flex-row items-center bg-slate-700 rounded-full px-3 py-1">
        <Ionicons name="star" size={20} color="#FFD700" />
        <Text className="text-white ml-2 font-bold">{stars}</Text>
      </View>
      <View className="flex-row items-center bg-slate-700 rounded-full px-3 py-1">
        <Ionicons name="diamond-outline" size={20} color="#4FD1C5" />
        <Text className="text-white ml-2 font-bold">{points.toLocaleString()}</Text>
      </View>
    </View>
  );
}