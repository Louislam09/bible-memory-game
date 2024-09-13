import React from 'react';
import { Text, View } from 'react-native';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  isVisible: boolean;
}

export default function Tooltip({ text, children, isVisible }: TooltipProps) {
  return (
    <View className="relative">
      {isVisible && (
        <>
          <View className="absolute bottom-full left-1/2 mb-2 w-[150px] -translate-x-1/2 transform rounded-lg bg-white p-2 shadow-lg">
            <Text className="text-slate-800">{text}</Text>
            {/* Tooltip arrow */}
            <View className="absolute bottom-[-8px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform bg-white" />
          </View>
        </>
      )}
      {children}
    </View>
  );
}
