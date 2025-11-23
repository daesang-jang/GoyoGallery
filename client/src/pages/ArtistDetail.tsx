import { useParams } from "wouter";
import ArtistDetail_goyo from "./artists/ArtistDetail_goyo";
import ArtistDetail_upcoming02 from "./artists/ArtistDetail_upcoming02";
import ArtistDetail_upcoming03 from "./artists/ArtistDetail_upcoming03";
import ArtistDetail_upcoming04 from "./artists/ArtistDetail_upcoming04";
import ArtistDetail_upcoming05 from "./artists/ArtistDetail_upcoming05";
import ArtistDetail_upcoming06 from "./artists/ArtistDetail_upcoming06";
import NotFound from "./not-found";

export default function ArtistDetail() {
  const params = useParams();
  const id = params.id;

  const detailComponents: Record<string, () => JSX.Element> = {
    "goyo": ArtistDetail_goyo,
    "upcoming02": ArtistDetail_upcoming02,
    "upcoming03": ArtistDetail_upcoming03,
    "upcoming04": ArtistDetail_upcoming04,
    "upcoming05": ArtistDetail_upcoming05,
    "upcoming06": ArtistDetail_upcoming06,
  };

  const DetailComponent = id ? detailComponents[id] : null;

  if (!DetailComponent) {
    return <NotFound />;
  }

  return <DetailComponent />;
}
