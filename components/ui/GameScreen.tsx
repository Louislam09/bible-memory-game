import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import Button3D from './Button3D';
import GameCard from './GameCard';
import LetterTile from './LetterTile';
import Tooltip from './Tooltip';
import TopBar from './TopBar';

export default function GameScreen() {
  const [level, setLevel] = useState(1);
  const [stars, setStars] = useState(12);
  const [points, setPoints] = useState(23495);

  const handleHint = () => {
    console.log('Hint used');
  };

  const handleSwap = () => {
    console.log('Swap used');
  };

  const handleHelp = () => {
    console.log('Help requested');
  };

  return (
    <ScrollView className="flex-1 bg-slate-800">
      <View className="p-4">
        <TopBar level={level} stars={stars} points={points} />
        <GameCard hint="MARVELOUS" word="Years crossing">
          <View className="flex-1 flex-row flex-wrap items-center justify-center">
            {['', 'A', '', '', '', 'E'].map((letter, index) => (
              <LetterTile
                key={index}
                letter={letter}
                onPress={() => console.log(`Tile ${index} pressed`)}
              />
            ))}
          </View>
        </GameCard>
        <View className="mt-8 flex-row justify-between">
          <Tooltip text="Get help">
            <Button3D text="?" onPress={handleHelp} />
          </Tooltip>
          <Button3D text="HINT" number={5} onPress={handleHint} />
          <Button3D text="SWAP" number={3} onPress={handleSwap} />
        </View>
      </View>
    </ScrollView>
  );
}
