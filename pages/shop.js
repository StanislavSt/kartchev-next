import Head from "next/head";
import Script from "next/script";

// import videoItem from "../video/karthecv-campaign.webm";
import { useRef, useState } from "react";
import Product from "../components/Product";
import products from "../products.json";

export default function Shop() {
  // const [paused, setPaused] = useState(true);
  const vidRef = useRef(null);
  // const handleOnClick = () => {
  //   vidRef.current.paused ? setPaused(false) : setPaused(true);
  //   vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
  //   vidRef.current.muted = false;
  // };

  return (
    <div style={{ background: "#7a7a7a" }}>
      <Head>
        <title>Kartchev Studio Shop</title>
        <meta
          name="description"
          content="Kartchev studio shop Tight-Fit Long-Sleeve Folk Top"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
        />
      </Head>
      <div className="big-image" style={{ cursor: "pointer" }}>
        <Script  src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js" />
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API2}
          hidden
        ></div>
        <video
          ref={vidRef}
          loop
          // onClick={() => handleOnClick()}
          playsInline
          controls
        >
          <source src={"./video/karthecv-campaign.mp4"} />
        </video>
        {/* {paused ? (
          <div className="video-overlay" onClick={() => handleOnClick()}>
            Play
          </div>
        ) : null} */}
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product pp={product} id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
}
