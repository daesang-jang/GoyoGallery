export interface ArtistMeta {
  id: string;
  name: string;
  nameEn?: string;
  medium?: string;
  thumbnail: string;
}

const artistList: ArtistMeta[] = [
  {
    id: "kimsan",
    name: "김 산",
    nameEn: "KIM San",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/kimsan/01_ks.jpg"
  },
  {
    id: "rohhyunwoo",
    name: "노현우",
    nameEn: "ROH HyunWoo",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/rohhyunwoo/01_rhw.jpg"
  },
  {
    id: "leeyoungji",
    name: "이영지",
    nameEn: "LEE YoungJi",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/leeyoungji/01_lyj.jpg"
  },
  {
    id: "leejungyoung",
    name: "이정용",
    nameEn: "LEE JungYong",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/leejungyong/01_ljy.jpg"
  },
  {
    id: "jangseil",
    name: "장세일",
    nameEn: "JANG SeIl",
    medium: "조각 | Sculpture",
    thumbnail: "/images/Artist/jangseil/01_jsi.jpg"
  },
  {
    id: "choiwoo",
    name: "최우",
    nameEn: "CHOI Woo",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/choiwoo/01_cw.jpg"
  },
  // 260401 - our rand scapes 전시 작가
  {
    id: "kosungmin",
    name: "고성민",
    nameEn: "KO SungMin",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/kosungmin/01_ksm.jpg"
  },
  {
    id: "kwonsooyeon",
    name: "권수연",
    nameEn: "KWON SooYeon",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/kwonsooyeon/01_ksy.jpg"
  },
  {
    id: "kimjihoon",
    name: "김지훈",
    nameEn: "KIM JiHoon",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/kimjihoon/01_kjh.jpg"
  },
  {
    id: "ohhyuckjin",
    name: "오혁진",
    nameEn: "OH HyckJin",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/ohhyuckjin/01_ohj.jpg"
  },
  {
    id: "hwangyoungrok",
    name: "황영록",
    nameEn: "HWANG YoungRok",
    medium: "회화 | Painting",
    thumbnail: "/images/Artist/hwangyoungrok/01_hyr.jpg"
  }
];

export const artists: ArtistMeta[] = [...artistList].sort((a, b) =>
  a.name.replace(/\s+/g, "").localeCompare(
    b.name.replace(/\s+/g, ""),
    "ko-KR",
    { sensitivity: "base" }
  )
);

export function getArtistById(id: string): ArtistMeta | undefined {
  return artists.find((artist) => artist.id === id);
}

export function getAllArtists(): ArtistMeta[] {
  return artists;
}