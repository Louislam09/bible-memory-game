import React, { useEffect, useState } from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';

import Button3D from './Button3D';
import GameCard from './GameCard';
import LetterTile from './LetterTile';
import Tooltip from './Tooltip';
import TopBar from './TopBar';
import { Link } from 'expo-router';
import verses from '~/data/verses';

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GameScreen() {
  const { width } = useWindowDimensions();
  const CARD_MARGIN = 5;
  const CARD_WIDTH = (width - CARD_MARGIN * 8) / 4;

  const [cards, setCards] = useState(shuffle([...verses, ...verses]));
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
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
    // console.log('Help requested');
  };

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;
      if (cards[firstIndex].text === cards[secondIndex].text) {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndexes([]), 1500);
    }
  }, [flippedIndexes]);

  const handleCardPress = (index: number) => {
    if (
      flippedIndexes.length < 2 &&
      !flippedIndexes.includes(index) &&
      !matchedIndexes.includes(index)
    ) {
      setFlippedIndexes([...flippedIndexes, index]);
    }
  };

  return (
    <View className="flex-1 bg-slate-800 p-4 pt-10">
      <View className="mb-6 flex-row">
        <Link href="/" asChild>
          <Button3D withIcon="home" variant="secondary" text="<" onPress={handleHelp} />
        </Link>
      </View>
      <View className="flex-1 bg-slate-800 p-2">
        <TopBar level={level} stars={stars} points={matchedIndexes.length} />
        <GameCard hint="MARVELOUS" word="Es tu turno!">
          <View className="flex-row flex-wrap items-center justify-center">
            {cards.map((card, index) => (
              <LetterTile
                key={index}
                card={card}
                index={index}
                flippedIndexes={flippedIndexes}
                isMatched={matchedIndexes.includes(index)}
                isFlipped={flippedIndexes.includes(index) || matchedIndexes.includes(index)}
                onPress={() => handleCardPress(index)}
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
