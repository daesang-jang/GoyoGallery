import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Train, Car } from "lucide-react";

export default function Visit() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="pt-32 pb-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-semibold mb-4 text-foreground"
              data-testid="text-page-title"
            >
              VISIT
            </h1>
            <div className="h-px w-24 bg-border mb-6" />
          </div>

          {/* 2단 레이아웃: PC에서는 좌우, 모바일에서는 상하 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: Visitor Information / Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">
                  Visitor Information
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        Opening Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Tuesday – Sunday: 10:30 – 18:00
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Closed on Sunday and Monday
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Last admission: 17:30
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        16 Maeheon-ro, Seocho-gu, Seoul
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        La Città Della Moda, 4F, 4151
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        Contact
                      </h3>
                      <p className="text-muted-foreground">Phone: 02-2155-0525</p>
                      <p className="text-muted-foreground">Fax: 02-2155-0526</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        E-mail
                      </h3>
                      <p className="text-muted-foreground">
                        gallery@artgoyo.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Directions + Map */}
            <div className="space-y-8">
              {/* Directions */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">
                  Directions
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Train className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        Subway
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Line 3 – Yangjae Citizen’s Forest Station, Exit 5
                        <br />
                        15-minute walk
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Car className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        Parking
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Ground-level parking available (Free parking for
                        visitors)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        When navigating, search for “La Cittadella Morada Tower
                        Parking.”
                        <br />
                        Please park on the 4th floor for the most convenient
                        access to GOYO Gallery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-[360px] md:h-[420px] rounded-md overflow-hidden md:ml-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.1428840521094!2d127.03546673833074!3d37.46183132587029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca12a7b4a486d%3A0xa33e1b384ae28228!2z65287Iuc65Sw6424652866qo64uk!5e0!3m2!1sen!2skr!4v1764380161727!5m2!1sen!2skr"
                  width="60%"
                  height="50%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
