import React from "react";
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import image1 from "../../../../assets/newsletterbg.jpg";
import image2 from "../../../../assets/recent1.jpg";
import image3 from "../../../../assets/recent2.jpg";

const ImageSlider = () => {
  const images = [image1, image2, image3];

  return (
    // Outer container: Full width, no padding at top/sides
    <header className="w-full overflow-hidden shadow-lg">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        closable={true}
        hideBarsDelay={0}
        controls={true}
        showCloseIcon={true}
        backdropDuration={300}
        // This class targets the inner container of the items
        elementClassNames="flex flex-row w-full h-[200px] md:h-[300px]"
      >
        {images.map((src, i) => (
          <a
            href={src}
            key={i}
            className="flex-1 overflow-hidden group border-r border-white/10 last:border-0"
          >
            <img
              src={src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              alt={`Banner slide ${i + 1}`}
            />
          </a>
        ))}
      </LightGallery>
    </header>
  );
};

export default ImageSlider;
