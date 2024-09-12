import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Board from '~/components/Board';

export default function GameScreen() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <StatusBar style="auto" />
      <Text className="mb-4 text-2xl text-gray-800 dark:text-gray-200">
        Tiempo: {timer} segundos
      </Text>
      <Board />
    </View>
  );
}
