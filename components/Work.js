// Import Swiper React components
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const imageMap = {
  miscible: {
    height: "1435",
    width: "2362",
  },
  ambivalence: {
    height: "1596",
    width: "2126",
  },
  dismorphiya: {
    height: "2160",
    width: "1728",
  },
  luxus: {
    height: "2088",
    width: "2953",
  },
  rest: {
    height: "1435",
    width: "2362",
  },
  fear: {
    height: "1253",
    width: "2067",
  },
  selective: {
    height: "1253",
    width: "2067",
  },
};

import Image from "next/image";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { tooltipOnHover, onMouseEnter } from "../utils/tooltipOnHover";
import { getMiddlewareRegex } from "next/dist/shared/lib/router/utils";

export const Work = ({
  img,
  images,
  header,
  content,
  location,
  credits,
  video,
}) => {
  const [swiper, setSwiper] = useState(null);
  const clientY = useRef(null);

  const onMouseMove = (e) => {
    clientY.current = e.clientY;
    tooltipOnHover(e);
  };

  useEffect(() => {
    const clearEvents = () => {
      window.removeEventListener("mousemove", onMouseMove);
      // window.removeEventListener('wheel', onScrollMove)
    };
    window.addEventListener("mousemove", onMouseMove);
    // window.addEventListener('wheel', onScrollMove)

    return () => clearEvents();
  }, []);

  const getImage = (name) => {
    if (name.includes("luxus"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.luxus.width}
          height={imageMap.luxus.height}
        />
      );
    if (name.includes("miscible"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.miscible.width}
          height={imageMap.miscible.height}
        />
      );
    if (name.includes("ambivalence"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.ambivalence.width}
          height={imageMap.ambivalence.height}
        />
      );
    if (name.includes("Heels"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.dismorphiya.width}
          height={imageMap.dismorphiya.height}
        />
      );
    if (name.includes("REST"))
      return (
        <Image
          src={name}
          className="dot"
          width={imageMap.rest.width}
          height={imageMap.rest.height}
        />
      );
    if (name.includes("selective"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.selective.width}
          height={imageMap.selective.height}
        />
      );
    if (name.includes("fear"))
      return (
        <Image
          className="dot"
          src={name}
          width={imageMap.fear.width}
          height={imageMap.fear.height}
        />
      );
  };

  return (
    <div className="container" onMouseOver={(e) => onMouseEnter(e)}>
      <div className="content-small">
        <div className="header" style={{ textAlign: "left" }}>
          {header}
        </div>
        <div style={{ textAlign: "left" }}>{content}</div>
        <div style={{ textAlign: "left" }}>{location}</div>
        <div style={{ textAlign: "left" }}>{credits}</div>
      </div>
      {img ? <img alt="miscible" src={img}></img> : null}
      {images ? (
        <div className="swip-container">
          <Swiper
            onInit={(e) => setSwiper(e)}
            slidesPerView={1}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
            onClick={() => swiper.slideNext()}
            loop
          >
            {video ? (
              <SwiperSlide key={1234}>
                <div>
                  <video
                    className="video dot"
                    src={video}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </SwiperSlide>
            ) : null}
            {images.map((i, index) => (
              <SwiperSlide key={index}>
                {getImage(i)}
                {/* <Image src={i} className="image" width={2067} height={1253} /> */}
              </SwiperSlide>
            ))}
          </Swiper>{" "}
        </div>
      ) : null}
      <div className="content-large">
        <div className="header" style={{ textAlign: "left" }}>
          {header}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {content}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {location}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {credits}
        </div>
      </div>
    </div>
  );
};
