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
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        {children}
      </TouchableOpacity>
      {isVisible && (
        <View className="absolute bottom-full left-0 bg-white rounded-lg p-2 shadow-lg mb-2">
          <Text className="text-slate-800">{text}</Text>
          <View className="absolute bottom-[-8px] left-4 w-4 h-4 bg-white rotate-45" />
        </View>
      )}
    </View>
  );
}