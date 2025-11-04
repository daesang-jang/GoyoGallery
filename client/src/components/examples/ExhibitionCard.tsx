import ExhibitionCard from '../ExhibitionCard'
import exhibitionImg from '@assets/generated_images/Abstract_geometric_exhibition_artwork_c83490f6.png'

export default function ExhibitionCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ExhibitionCard
        title="Geometric Abstractions"
        artist="김현우"
        date="2024.11.01 - 2024.12.15"
        image={exhibitionImg}
      />
    </div>
  )
}
