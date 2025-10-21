import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArtworkCarouselProps {
  imageUrls: string[];
  title: string;
}

export default function ArtworkCarousel({ imageUrls, title }: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = imageUrls.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrls[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-auto transition-opacity duration-500 hover:opacity-90"
        />
        
        {hasMultipleImages && (
          <>
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {currentIndex + 1} / {imageUrls.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}