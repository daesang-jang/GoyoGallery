import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Train, Car } from "lucide-react";
import splashImage from "@assets/Splash_1762350455042.png";

export default function Visit() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground" data-testid="text-page-title">VISIT</h1>
            <div className="h-px w-24 bg-border mb-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Visitor Information
</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Opening Hours
</h3>
                      <p className="text-muted-foreground">Tuesday – Sunday: 10:00 – 19:00</p>
                      <p className="text-sm text-muted-foreground mt-1">Closed on Mondays and public holidays</p>
                      <p className="text-sm text-muted-foreground">Last admission: 18:30</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Address</h3>
                      <p className="text-muted-foreground">16 Maeheon-ro, Seocho-gu, Seoul
 </p>
                      <p className="text-sm text-muted-foreground mt-1">La Città Della Moda, 4F, 4151 </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Contact</h3>
                      <p className="text-muted-foreground">Phone: 02-1234-5678</p>
                      <p className="text-muted-foreground">Fax: 02-1234-5679</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">E-mail</h3>
                      <p className="text-muted-foreground">gallery@artgoyo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Directions</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Train className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Subway</h3>
                      <p className="text-muted-foreground mb-1">Line 3 – Yangjae Citizen’s Forest Station, Exit 5 <br />
                      15-minute walk</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Car className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Parking</h3>
                      <p className="text-muted-foreground mb-1">Ground-level parking available
</p>
                      <p className="text-sm text-muted-foreground">3 hours free parking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md bg-white rounded-lg flex items-center justify-center p-8">
                  <img
                    src="/images/Goyo/1.png"
                    alt="GOYO GALLERY"
                    className="w-full max-w-2xl"
                    data-testid="img-about"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
