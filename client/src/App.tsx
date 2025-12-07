import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/not-found";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import CurrentExhibitions from "./pages/CurrentExhibitions";
import UpcomingExhibitions from "./pages/UpcomingExhibitions";
import PastExhibitions from "./pages/PastExhibitions";
import ExhibitionDetail from "./pages/ExhibitionDetail";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import PublicArt from "./pages/PublicArt";
import PublicArtDetail from "./pages/PublicArtDetail";
import Consulting from "./pages/Consulting";
import ConsultingDetail from "./pages/ConsultingDetail";
import Academy from "./pages/Academy";
import About from "./pages/About";
import Visit from "./pages/Visit";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Splash} />
      <Route path="/home" component={Home} />
      <Route path="/exhibitions/current" component={CurrentExhibitions} />
      <Route path="/exhibitions/upcoming" component={UpcomingExhibitions} />
      <Route path="/exhibitions/past" component={PastExhibitions} />
      <Route path="/exhibitions/detail/:id" component={ExhibitionDetail} />
      <Route path="/artists" component={Artists} />
      <Route path="/artists/:id" component={ArtistDetail} />
      <Route path="/public-art" component={PublicArt} />
      <Route path="/public-art/:id" component={PublicArtDetail} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/consulting/:id" component={ConsultingDetail} />
      <Route path="/academy" component={Academy} />
      <Route path="/about" component={About} />
      <Route path="/visit" component={Visit} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // GitHub Pages(daesang-jang.github.io)에서만 /GoyoGallery 를 base로 사용
  // 커스텀 도메인(artgoyo.com)이나 Replit dev에서는 base = ""
  let base = "";

  if (
    typeof window !== "undefined" &&
    window.location.hostname === "daesang-jang.github.io"
  ) {
    base = "/GoyoGallery";
  }

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={base}>
        <ScrollToTop />
        <Routes />
      </WouterRouter>
    </QueryClientProvider>
  );
}


export default App;
