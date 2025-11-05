import { Calendar } from "lucide-react";

import { Link } from "wouter";

interface ExhibitionCardProps {
  title: string;
  artist: string;
  date: string;
  image: string;
  id?: string;
}

export default function ExhibitionCard({ title, artist, date, image, id }: ExhibitionCardProps) {
  const CardContent = () => (
    <div className="group cursor-pointer" data-testid={`card-exhibition-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-white/90 mb-1">{artist}</p>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{artist}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {date}
        </p>
      </div>
    </div>
  );

  if (id) {
    return (
      <Link href={`/exhibitions/detail/${id}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
