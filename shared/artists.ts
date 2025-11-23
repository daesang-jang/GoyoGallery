export interface ArtistMeta {
  id: string;
  name: string;
  nameEn?: string;
  medium?: string;
  thumbnail: string;
}

export const artists: ArtistMeta[] = [
  {
    id: "goyo",
    name: "고요",
    nameEn: "Go yo",
    medium: "회화",
    thumbnail: "/images/Artist/Upcoming/uc01.png"
  },
  {
    id: "upcoming02",
    name: "Upcoming Artist 02",
    nameEn: "",
    medium: "",
    thumbnail: ""
  },
  {
    id: "upcoming03",
    name: "Upcoming Artist 03",
    nameEn: "",
    medium: "",
    thumbnail: ""
  },
  {
    id: "upcoming04",
    name: "Upcoming Artist 04",
    nameEn: "",
    medium: "",
    thumbnail: ""
  },
  {
    id: "upcoming05",
    name: "Upcoming Artist 05",
    nameEn: "",
    medium: "",
    thumbnail: ""
  },
  {
    id: "upcoming06",
    name: "Upcoming Artist 06",
    nameEn: "",
    medium: "",
    thumbnail: ""
  },
];

export function getArtistById(id: string): ArtistMeta | undefined {
  return artists.find(artist => artist.id === id);
}

export function getAllArtists(): ArtistMeta[] {
  return artists;
}
