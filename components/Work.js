// Import Swiper React components
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { tooltipOnHover, onMouseEnter } from "../utils/tooltipOnHover";

const imageMap = {
  miscible: {
    height: "2870",
    width: "4724",
  },
  ambivalence: {
    height: "3192",
    width: "4252",
  },
  dismorphiya: {
    height: "4320",
    width: "3456",
  },
  luxus: {
    height: "4176",
    width: "5906",
  },
  rest: {
    height: "2870",
    width: "4724",
  },
  fear: {
    height: "2506",
    width: "4134",
  },
  selective: {
    height: "2506",
    width: "4134",
  },
};

export const Work = ({
  img,
  images,
  header,
  content,
  location,
  credits,
  video,
  video2,
  images2,
  linksObject,
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
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => clearEvents();
  }, []);

  const getImage = (name) => {
    if (name.includes("luxus"))
      return (
        <Image
          className="dot"
          alt={name}
          src={name}
          width={imageMap.luxus.width}
          height={imageMap.luxus.height}
        />
      );
    if (name.includes("miscible"))
      return (
        <Image
          className="dot"
          alt={name}
          src={name}
          width={imageMap.miscible.width}
          height={imageMap.miscible.height}
        />
      );
    if (name.includes("ambivalence"))
      return (
        <Image
          className="dot"
          alt={name}
          src={name}
          width={imageMap.ambivalence.width}
          height={imageMap.ambivalence.height}
        />
      );
    if (name.includes("Heels"))
      return (
        <Image
          className="dot"
          alt={name}
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
          alt={name}
          width={imageMap.rest.width}
          height={imageMap.rest.height}
        />
      );
    if (name.includes("selective"))
      return (
        <Image
          loading="eager"
          className="dot"
          alt={name}
          src={name}
          width={imageMap.selective.width}
          height={imageMap.selective.height}
          priority
        />
      );
    if (name.includes("fear"))
      return (
        <Image
          className="dot"
          alt={name}
          src={name}
          width={imageMap.fear.width}
          height={imageMap.fear.height}
          loading="eager"
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
            onClick={() => swiper.slideNext()}
            loop
          >
            {images.map((i, index) => (
              <SwiperSlide key={index}>
                {getImage(i)}{" "}
                <div className="links-container">
                  {linksObject
                    ? linksObject.map((item, index) => (
                        <a href={item[0]} key={index}>
                          {item[1]}{" "}
                          {index + 1 < linksObject.length ? "|" : null}
                        </a>
                      ))
                    : null}
                </div>
                <div className="text-scroll-container">
                  <section className="news-message">
                    <div>{header + " " + content + " " + location}</div>
                  </section>
                </div>
              </SwiperSlide>
            ))}
            {video ? (
              <SwiperSlide key={1234}>
                <div>
                  <video
                    style={
                      video === "/video/sam_rolfes.mp4"
                        ? { width: "134%" }
                        : null
                    }
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
            {video2 ? (
              <SwiperSlide key={12345}>
                <div>
                  <video
                    className="video dot video2"
                    src={video2}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </SwiperSlide>
            ) : null}

            {images2
              ? images2.map((i, index) => (
                  <SwiperSlide key={index + "aa"}>
                    {getImage(i)}{" "}
                    <div className="links-container">
                      {linksObject
                        ? linksObject.map((item, index) => (
                            <a href={item[0]} key={index}>
                              {item[1]}{" "}
                              {index + 1 < linksObject.length ? "|" : null}
                            </a>
                          ))
                        : null}
                    </div>
                    <div className="text-scroll-container">
                      <section className="news-message">
                        <div>{header + " " + content + " " + location}</div>
                      </section>
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>{" "}
        </div>
      ) : null}

      <div className="content-large">
        <div
          className="header"
          style={{ textAlign: "left", fontWeight: "900" }}
        >
          {header}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {content}
        </div>
        <div className="contentt" style={{ textAlign: "left" }}>
          {location}
        </div>
        <div
          className="contentt"
          style={{ textAlign: "left", fontSize: "25px" }}
        >
          {credits}
        </div>
      </div>
    </div>
  );
};
