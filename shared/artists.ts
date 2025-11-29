export interface ArtistMeta {
  id: string;
  name: string;
  nameEn?: string;
  medium?: string;
  thumbnail: string;
}

export const artists: ArtistMeta[] = [
  {
    id: "kimsan",
    name: "김 산",
    nameEn: "Kim san",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/kimsan/01_ks.jpg"
  },
  {
    id: "rohhyunwoo",
    name: "노현우",
    nameEn: "Roh Hyun-woo",
    medium: "회화 | Painting",
    thumbnail: "/images/Exhibition/1/02.png"
  },
  {
    id: "leejungyoung",
    name: "이정용",
    nameEn: "Lee Jung-young",
    medium: "회화 | Painting",
    thumbnail: "/images/Exhibition/1/03.png"
  },
  {
    id: "leeyoungji",
    name: "이영지",
    nameEn: "Lee Young-ji",
    medium: "회화 | Painting",
    thumbnail: "/images/Exhibition/1/04.png"
  },
  {
    id: "jangseil",
    name: "장세일",
    nameEn: "Jang Se-il",
    medium: "조각 | Sculpture",
    thumbnail: "/images/Exhibition/1/05.png"
  },
  {
    id: "choiwoo",
    name: "최우",
    nameEn: "Choi Woo",
    medium: "회화 | Painting",
    thumbnail: "/images/Exhibition/1/06.png"
  },
];

export function getArtistById(id: string): ArtistMeta | undefined {
  return artists.find(artist => artist.id === id);
}

export function getAllArtists(): ArtistMeta[] {
  return artists;
}
