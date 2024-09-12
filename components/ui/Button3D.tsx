import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface Button3DProps {
  text: string;
  number?: number;
  onPress: () => void;
}

export default function Button3D({ text, number, onPress }: Button3DProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="transition-transform duration-100 active:translate-y-1">
      <View className="flex-row items-center justify-between rounded-full bg-[#F8D3AB] px-6 py-3 shadow-lg shadow-[#D35269]">
        <Text className="mr-2 text-xl font-bold text-[#8B4C39]">{text}</Text>
        {number !== undefined && (
          <View className="h-8 w-8 items-center justify-center rounded-full bg-[#8B4C39]">
            <Text className="text-lg font-bold text-[#F8D3AB]">{number}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
