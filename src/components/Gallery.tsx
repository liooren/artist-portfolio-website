import ArtworkCarousel from './ArtworkCarousel';

interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  year: string;
  medium: string;
}

interface GalleryProps {
  artworks: Artwork[];
  title: string;
  sidebarOpen: boolean;
}

export default function Gallery({ artworks, title, sidebarOpen }: GalleryProps) {
  return (
    <div className={`min-h-screen bg-white transition-all duration-300 ${
      sidebarOpen ? 'ml-48' : 'ml-0'
    }`}>
      <div className={`p-12 ${!sidebarOpen ? 'pt-20' : ''}`}>
        {/* Artist Name */}
        <div className="mb-8 max-w-3xl mx-auto">
          <h1 className="text-lg font-light tracking-widest text-gray-900">Kristina Lavrinok</h1>
        </div>
        
        {/* Header */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">{title}</h2>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-3xl mx-auto space-y-20">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="space-y-6"
            >
              <ArtworkCarousel 
                imageUrls={artwork.imageUrls} 
                title={artwork.title} 
              />
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-light text-gray-900">{artwork.title}</h3>
                  <span className="text-sm text-gray-500">{artwork.year}</span>
                </div>
                
                <p className="text-xs text-gray-500 uppercase tracking-wide">{artwork.medium}</p>
                
                <p className="text-sm text-gray-600 leading-relaxed">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}