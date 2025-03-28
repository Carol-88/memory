// /utils/gameUtils.ts

export const characters: Array<{ character: string; image: string }> = [
  { character: 'Bioshock', image: '/images/bioshock.webp' },
  { character: 'Bioshock', image: '/images/bioshock.webp' }, // Duplicado
  { character: 'Clare', image: '/images/clare.webp' },
  { character: 'Clare', image: '/images/clare.webp' }, // Duplicado
  { character: 'Cloud', image: '/images/cloud.webp' },
  { character: 'Cloud', image: '/images/cloud.webp' }, // Duplicado
  { character: 'Geralt', image: '/images/geralt.webp' },
  { character: 'Geralt', image: '/images/geralt.webp' }, // Duplicado
  { character: 'Halo', image: '/images/halo.webp' },
  { character: 'Halo', image: '/images/halo.webp' }, // Duplicado
  { character: 'JackDexter', image: '/images/jackdexter.webp' },
  { character: 'JackDexter', image: '/images/jackdexter.webp' }, // Duplicado
  { character: 'Kirby', image: '/images/kirby.webp' },
  { character: 'Kirby', image: '/images/kirby.webp' }, // Duplicado
  { character: 'Kratos', image: '/images/kratos.webp' },
  { character: 'Kratos', image: '/images/kratos.webp' }, // Duplicado
  { character: 'LaraCroft', image: '/images/laracroft.webp' },
  { character: 'LaraCroft', image: '/images/laracroft.webp' }, // Duplicado
  { character: 'Link', image: '/images/link.webp' },
  { character: 'Link', image: '/images/link.webp' }, // Duplicado
  { character: 'Minecrat', image: '/images/minecraft.webp' },
  { character: 'Minecrat', image: '/images/minecraft.webp' }, // Duplicado
  { character: 'SamusAran', image: '/images/samusaran.webp' },
  { character: 'SamusAran', image: '/images/samusaran.webp' }, // Duplicado
];

export const shuffleArray = (array: Array<{ character: string; image: string }>) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};