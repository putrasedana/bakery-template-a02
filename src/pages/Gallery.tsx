import { useState, useCallback, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import productCake from "@/assets/product-cake-1.webp";
import productCookies from "@/assets/product-cookies-1.webp";
import productCupcakes from "@/assets/product-cupcakes-1.webp";
import productTraditional from "@/assets/product-traditional-1.webp";
import aboutBakery from "@/assets/about-bakery.webp";
import heroBakery from "@/assets/hero-bakery.webp";

const Gallery = () => {
  const galleryImages = [
    {
      src: productCake,
      alt: "Beautiful chocolate birthday cake with decorative frosting",
      category: "Cakes",
    },
    {
      src: productCookies,
      alt: "Colorful rainbow macarons arranged beautifully",
      category: "Cookies",
    },
    {
      src: productCupcakes,
      alt: "Elegant cupcakes with buttercream flower decorations",
      category: "Cupcakes",
    },
    {
      src: productTraditional,
      alt: "Traditional Indonesian kue snacks",
      category: "Traditional",
    },
    {
      src: heroBakery,
      alt: "Freshly baked assortment of treats at Dapoer Manis",
      category: "Bakery",
    },
    {
      src: aboutBakery,
      alt: "Behind the scenes at Dapoer Manis kitchen",
      category: "Kitchen",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);
  const imageRefs = useRef([]);

  // Automatically focus modal when opened
  useEffect(() => {
    if (selectedIndex !== null && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedIndex]);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // When modal closes, return focus to the clicked image
  useEffect(() => {
    if (
      selectedIndex === null &&
      imageRefs.current[prevFocusedIndexRef.current]
    ) {
      imageRefs.current[prevFocusedIndexRef.current].focus();
    }
  }, [selectedIndex]);

  // Store the last focused image index
  const prevFocusedIndexRef = useRef(null);

  // Navigate left/right
  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [galleryImages.length]);

  // Swipe handling
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) showNext(); // swipe left
    if (touchEndX - touchStartX > 50) showPrev(); // swipe right
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a peek at our delicious creations and happy customers
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              onClick={() => {
                prevFocusedIndexRef.current = index;
                setSelectedIndex(index);
              }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up focus:outline-none focus:ring-4 focus:ring-primary cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`View ${image.category} image`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <p className="text-sm font-semibold">{image.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedIndex !== null && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeModal();
              if (e.key === "ArrowLeft") showPrev();
              if (e.key === "ArrowRight") showNext();
            }}
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="
    absolute 
    top-4 
    left-1/2 
    -translate-x-1/2 
    md:left-auto md:right-6 md:translate-x-0 
    bg-black/60 hover:bg-black/80 
    text-white rounded-full p-3 
    transition-colors 
    focus:outline-none focus:ring-2 focus:ring-white
  "
              aria-label="Close gallery"
              title="Close"
              type="button"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Previous Button (hidden on mobile) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="hidden md:flex absolute left-6 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
              title="Previous"
            >
              <ChevronLeft size={28} aria-hidden="true" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button (hidden on mobile) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="hidden md:flex absolute right-6 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
              title="Next"
            >
              <ChevronRight size={28} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/60 via-secondary/60 to-accent/60 rounded-3xl p-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">
            Want to See Your Event Here?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us make your celebration extra special with our custom baked
            goods!
          </p>
          <a href="/order">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
