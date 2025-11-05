import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Splash from "@/pages/Splash";
import Home from "@/pages/Home";
import CurrentExhibitions from "@/pages/CurrentExhibitions";
import UpcomingExhibitions from "@/pages/UpcomingExhibitions";
import PastExhibitions from "@/pages/PastExhibitions";
import ExhibitionDetail from "@/pages/ExhibitionDetail";
import Artists from "@/pages/Artists";
import ArtistDetail from "@/pages/ArtistDetail";
import PublicArt from "@/pages/PublicArt";
import Consulting from "@/pages/Consulting";
import Academy from "@/pages/Academy";
import About from "@/pages/About";
import Visit from "@/pages/Visit";

function Router() {
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
      <Route path="/consulting" component={Consulting} />
      <Route path="/academy" component={Academy} />
      <Route path="/about" component={About} />
      <Route path="/visit" component={Visit} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
