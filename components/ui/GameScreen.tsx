import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Button3D from './Button3D';
import GameCard from './GameCard';
import LetterTile from './LetterTile';
import Tooltip from './Tooltip';
import TopBar from './TopBar';
import { Link } from 'expo-router';

export default function GameScreen() {
  const [level, setLevel] = useState(0);
  const [stars, setStars] = useState(0);
  const [points, setPoints] = useState(0);
  const [hints, setHints] = useState(0);
  const [swaps, setSwaps] = useState(0);

  const handleHint = () => {
    console.log('Hint used');
  };

  const handleSwap = () => {
    console.log('Swap used');
  };

  const handleHelp = () => {
    console.log('Help requested');
  };

  const letters = new Array(15).fill(0).map((x, i) => i);

  return (
    <View className="flex-1 bg-slate-800 p-4 pt-10">
      <View className="flex-row">
        <Link href="/" asChild>
          <Button3D withIcon="home" variant="secondary" text="<" onPress={handleHelp} />
        </Link>
      </View>
      <View className="flex-1 bg-slate-800 p-2">
        <TopBar level={level} stars={stars} points={points} />
        <GameCard hint="MARVELOUS" word="Years crossing">
          <View className="flex-row flex-wrap items-center justify-center">
            {letters.map((letter, index) => (
              <LetterTile
                key={index}
                letter={letter}
                onPress={() => console.log(`Tile ${index} pressed`)}
              />
            ))}
          </View>
        </GameCard>
        <View className="mt-8 flex-row justify-between">
          <Button3D variant="default" text="HINT" number={hints} onPress={handleHint} />
          <Button3D variant="secondary" text="SWAP" number={swaps} onPress={handleSwap} />
        </View>
      </View>
    </View>
  );
}
