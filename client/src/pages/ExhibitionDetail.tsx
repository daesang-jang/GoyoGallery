import { useParams } from "wouter";
import ExhibitionDetail1 from "./exhibitions/ExhibitionDetail1";
import ExhibitionDetail2 from "./exhibitions/ExhibitionDetail2";
import ExhibitionDetail3 from "./exhibitions/ExhibitionDetail3";
import ExhibitionDetail4 from "./exhibitions/ExhibitionDetail4";
import ExhibitionDetail5 from "./exhibitions/ExhibitionDetail5";
import ExhibitionDetail6 from "./exhibitions/ExhibitionDetail6";
import NotFound from "./not-found";

export default function ExhibitionDetail() {
  const params = useParams();
  const id = params.id;

  const detailComponents: Record<string, () => JSX.Element> = {
    "1": ExhibitionDetail1,
    "2": ExhibitionDetail2,
    "3": ExhibitionDetail3,
    "4": ExhibitionDetail4,
    "5": ExhibitionDetail5,
    "6": ExhibitionDetail6,
  };

  const DetailComponent = id ? detailComponents[id] : null;

  if (!DetailComponent) {
    return <NotFound />;
  }

  return <DetailComponent />;
}
