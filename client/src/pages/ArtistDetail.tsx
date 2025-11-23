import { useParams } from "wouter";
import ArtistDetail_kimsan from "./artists/ArtistDetail_kimsan";
import ArtistDetail_rohhyunwoo from "./artists/ArtistDetail_rohhyunwoo";
import ArtistDetail_leejungyoung from "./artists/ArtistDetail_leejungyoung";
import ArtistDetail_leeyoungji from "./artists/ArtistDetail_leeyoungji";
import ArtistDetail_jangseil from "./artists/ArtistDetail_jangseil";
import ArtistDetail_choiwoo from "./artists/ArtistDetail_choiwoo";
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
  };

  const DetailComponent = id ? detailComponents[id] : null;

  if (!DetailComponent) {
    return <NotFound />;
  }

  return <DetailComponent />;
}
