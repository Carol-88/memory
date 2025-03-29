export interface Card {
  id: string;
  character: string;
  image: string;
  isMatched: boolean;
}

const baseCharacters = [
  { character: 'Bioshock', image: '/images/bioshock.webp' },
  { character: 'Clare', image: '/images/clare.webp' },
  { character: 'Cloud', image: '/images/cloud.webp' },
  { character: 'Geralt', image: '/images/geralt.webp' },
  { character: 'Halo', image: '/images/halo.webp' },
  { character: 'JackDexter', image: '/images/jackdexter.webp' },
  { character: 'Kirby', image: '/images/kirby.webp' },
  { character: 'Kratos', image: '/images/kratos.webp' },
  { character: 'LaraCroft', image: '/images/laracroft.webp' },
  { character: 'Link', image: '/images/link.webp' },
  { character: 'Minecraft', image: '/images/minecraft.webp' },
  { character: 'SamusAran', image: '/images/samusaran.webp' },
];

export const createGameCards = (): Card[] => {
  const duplicatedCards = baseCharacters.flatMap(card => [
    { ...card, id: `${card.character}-1`, isMatched: false },
    { ...card, id: `${card.character}-2`, isMatched: false }
  ]);
  return shuffleArray(duplicatedCards);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};