// import Head from "next/head";

// import videoItem from "../video/karthecv-campaign.webm";
import { useRef, useState } from "react";
import Product from "../components/Product";
import products from "../products.json";

export default function Shop() {
  const [paused, setPaused] = useState(true);
  const vidRef = useRef(null);
  const handleOnClick = () => {
    vidRef.current.paused ? setPaused(false) : setPaused(true);
    vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    vidRef.current.muted = false;
  };

  return (
    <div style={{ background: "#7a7a7a" }}>
      <div className="big-image" style={{ cursor: "pointer" }}>
        <video
          ref={vidRef}
          loop
          onClick={() => handleOnClick()}
          playsInline
          controls
        >
          <source src={"./video/karthecv-campaign.webm"} />
        </video>
        {paused ? (
          <div className="video-overlay" onClick={() => handleOnClick()}>
            Play
          </div>
        ) : null}
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product pp={product} id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
}
