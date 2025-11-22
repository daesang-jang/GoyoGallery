export type ExhibitionStatus = 'current' | 'upcoming' | 'past';

export interface Exhibition {
  id: string;
  title: string;
  titleEn?: string;
  artists: string;
  date: string;
  status: ExhibitionStatus;
  image: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    title: "침묵과 물질 사이",
    titleEn: "Between Silence and Matter",
    artists: "Glenn Ligon, Jack Whitten, Jeff Elrod, 이건용, 이우환",
    date: "2024.11.01 - 2024.12.15",
    status: "current",
    image: "Abstract_geometric_exhibition_artwork_c83490f6.png",
  },
  {
    id: "2",
    title: "Digital Dreams",
    artists: "한지수",
    date: "2025.01.05 - 2025.02.20",
    status: "upcoming",
    image: "Abstract_geometric_exhibition_artwork_c83490f6.png",
  },
  {
    id: "3",
    title: "Nature's Voice",
    artists: "송민아",
    date: "2025.01.15 - 2025.03.01",
    status: "upcoming",
    image: "Contemporary_Korean_landscape_657013ad.png",
  },
  {
    id: "4",
    title: "Urban Perspectives",
    artists: "김태영",
    date: "2024.09.01 - 2024.10.15",
    status: "past",
    image: "Monochrome_architectural_photography_e843186b.png",
  },
  {
    id: "5",
    title: "Traditional Modern",
    artists: "윤서희",
    date: "2024.08.10 - 2024.09.30",
    status: "past",
    image: "Korean_ceramic_sculpture_b99d58e8.png",
  },
  {
    id: "6",
    title: "Color Theory",
    artists: "장민석",
    date: "2024.07.15 - 2024.08.31",
    status: "past",
    image: "Abstract_expressionist_painting_1825f2af.png",
  },
];

export function getExhibitionById(id: string): Exhibition | undefined {
  return exhibitions.find(ex => ex.id === id);
}

export function getExhibitionsByStatus(status: ExhibitionStatus): Exhibition[] {
  return exhibitions.filter(ex => ex.status === status);
}

export function getCurrentExhibition(): Exhibition | undefined {
  return exhibitions.find(ex => ex.status === 'current');
}
