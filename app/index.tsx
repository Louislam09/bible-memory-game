import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button3D from '~/components/ui/Button3D';

export default function HomeScreen() {
  const handleHint = () => {
    console.log('Hint used');
  };

  const handleSwap = () => {
    console.log('Swap used');
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="auto" />
      <Text className="my-5 px-2 text-center text-6xl font-bold text-white">Bible Memory</Text>
      <View className="my-3 flex-row gap-3">
        <Link href="/game" asChild>
          <Button3D variant="default" text="PLAY" onPress={handleHint} />
        </Link>
        <Button3D variant="secondary" text="SETTINGS" onPress={handleSwap} />
      </View>
    </View>
  );
}
