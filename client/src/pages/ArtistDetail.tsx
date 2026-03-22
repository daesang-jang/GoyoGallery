import { useParams } from "wouter";
import ArtistDetail_kimsan from "./artists/ArtistDetail_kimsan";
import ArtistDetail_rohhyunwoo from "./artists/ArtistDetail_rohhyunwoo";
import ArtistDetail_leejungyoung from "./artists/ArtistDetail_leejungyoung";
import ArtistDetail_leeyoungji from "./artists/ArtistDetail_leeyoungji";
import ArtistDetail_jangseil from "./artists/ArtistDetail_jangseil";
import ArtistDetail_choiwoo from "./artists/ArtistDetail_choiwoo";
import ArtistDetail_kosungmin from "./artists/ArtistDetail_kosungmin";
import ArtistDetail_kwonsooyeon from "./artists/ArtistDetail_kwonsooyeon";
import ArtistDetail_kimjihoon from "./artists/ArtistDetail_kimjihoon";
import ArtistDetail_ohhyuckjin from "./artists/ArtistDetail_ohhyuckjin";
import ArtistDetail_hwangyoungrok from "./artists/ArtistDetail_hwangyoungrok";
import NotFound from "./not-found";

export default function ArtistDetail() {
  const params = useParams();
  const id = params.id;

  const detailComponents: Record<string, () => JSX.Element> = {
    "kimsan": ArtistDetail_kimsan,
    "rohhyunwoo": ArtistDetail_rohhyunwoo,
    "leejungyoung":  ArtistDetail_leejungyoung,
    "leeyoungji": ArtistDetail_leeyoungji,
    "jangseil": ArtistDetail_jangseil,
    "choiwoo": ArtistDetail_choiwoo,
    "kosungmin": ArtistDetail_kosungmin,
    "kwonsooyeon": ArtistDetail_kwonsooyeon,
    "kimjihoon": ArtistDetail_kimjihoon,
    "ohhyuckjin": ArtistDetail_ohhyuckjin,
    "hwangyoungrok": ArtistDetail_hwangyoungrok,
    
  };

  const DetailComponent = id ? detailComponents[id] : null;

  if (!DetailComponent) {
    return <NotFound />;
  }

  return <DetailComponent />;
}
