import Image from "next/image";
import ScrollCarousel from "scroll-carousel-react";

const ScrollCarouselComponent = () => {
  const urls = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <ScrollCarousel autoplay autoplaySpeed={1} speed={5} margin={30}>
      {urls.map((image) => (
        <div
          key={image}
          className={`w-96 h-96 rounded-2xl background-${image}`}
        ></div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
