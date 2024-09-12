import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>{children}</TouchableOpacity>
      {isVisible && (
        <>
          <Text className="text-2xl">Luis</Text>
          <View className="absolute bottom-full left-0 mb-2 rounded-lg bg-white p-2 shadow-lg">
            <Text className="text-slate-800">{text}</Text>
            <View className="absolute bottom-[-8px] left-4 h-4 w-4 rotate-45 bg-white" />
          </View>
        </>
      )}
    </View>
  );
}
