import { useState } from "react";

export default function ProductGallery({ images, alt }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="premium-card overflow-hidden p-3">
        <img src={activeImage} alt={alt} className="h-[480px] w-full rounded-[24px] object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className={`premium-card overflow-hidden p-2 ${activeImage === image ? "ring-2 ring-[var(--primary)]" : ""}`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} alt={alt} className="h-28 w-full rounded-[18px] object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
