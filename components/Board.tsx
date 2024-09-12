import React, { useState, useEffect } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Card from './Card';
import verses from '../data/verses';

export default function Board() {
  const { width } = useWindowDimensions();
  const CARD_MARGIN = 5;
  const CARD_WIDTH = (width - 40 - CARD_MARGIN * 8) / 4;

  const [cards, setCards] = useState(shuffle([...verses, ...verses]));
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = flippedIndexes;
      if (cards[firstIndex].text === cards[secondIndex].text) {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndexes([]), 1000);
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
    <View className="flex-row flex-wrap justify-center p-2">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          isFlipped={flippedIndexes.includes(index) || matchedIndexes.includes(index)}
          onPress={() => handleCardPress(index)}
          width={CARD_WIDTH}
        />
      ))}
    </View>
  );
}

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
