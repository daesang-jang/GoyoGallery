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
    thumbnail: "/images/Artist/rohhyunwoo/01_rhw.jpg"
  },
  {
    id: "leejungyoung",
    name: "이정용",
    nameEn: "Lee Jung-yong",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/leejungyong/01_ljy.jpg"
  },
  {
    id: "leeyoungji",
    name: "이영지",
    nameEn: "Lee Young-ji",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/leeyoungji/01_lyj.jpg"
  },
  {
    id: "jangseil",
    name: "장세일",
    nameEn: "Jang Se-il",
    medium: "조각 | Sculpture",
    thumbnail: "/images/Artist/jangseil/01_jsi.jpg"
  },
  {
    id: "choiwoo",
    name: "최우",
    nameEn: "Choi Woo",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/choiwoo/01_cw.jpg"
  },
];

export function getArtistById(id: string): ArtistMeta | undefined {
  return artists.find(artist => artist.id === id);
}

export function getAllArtists(): ArtistMeta[] {
  return artists;
}
