import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Product({ pp, id }) {
  const [products, setProducts] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("Size");

  const handleOnClick = (e) => {
    setSelected(e.target.textContent);
    setShowDropdown(false);
  };
  useEffect(async () => {
    const secret = process.env.NEXT_PUBLIC_SNIPCART_API;
    const request = await fetch(`https://app.snipcart.com/api/products/${id}`, {
      headers: {
        Authorization: `Basic ${btoa(secret)}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const products = await request.json();
    setProducts(products);
  }, []);

  return (
    <div key={pp.id} style={{ marginTop: "50px" }}>
      <div className="product-container">
        <div className="image-container">
          {/* <img
            src={`.${pp.image}`}
            alt={`Preview of ${pp.title}`}
            className="product-image"
          /> */}
          <div className="img-container">
            <img
              src={`.${pp.image}`}
              imageAlt="Example"
              style={{objectFit:'contain'}}
            />
          </div>
          <div className="img-container-mobile">
            <Swiper
              preventClicks
              Product
              slidesPerView={1}
              loop
              style={{ width: "370px", height: "360px" }}
            >
              <SwiperSlide>
                <Image src={pp.image} layout="fill" objectFit="contain"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={pp.image2} layout="fill" objectFit="contain"/>
              </SwiperSlide>
            </Swiper>{" "}
          </div>
          <div className="product-description">
            <h3>{pp.title}</h3>
            <div>
              <div style={{ fontSize: "12px" }}>
                <p>{pp.description}</p>
                <p>93% PES 7% ELAST</p>
                <p>Sublimation print</p> <p>Produced in Bulgaria</p>
                <p>Size on Model: {pp.sizeOnModel}</p>
              </div>

              <p style={{ fontWeight: "900", color: "white" }}>€{pp.price}</p>
            </div>
            <div className="dropdown-container">
              <div
                className="dropdown-header"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span style={{ fontSize: "14px" }}>{selected}</span>
              </div>

              {showDropdown ? (
                <div className="dropdown-list">
                  {products
                    ? products.variants.map((x, index) => {
                        return (
                          <div
                            onClick={handleOnClick}
                            className={x.stock <= 0 ? "soldOut" : null}
                            key={index}
                          >
                            {x.variation[0].option}
                          </div>
                        );
                      })
                    : null}
                </div>
              ) : null}
            </div>
            <p>
              <button
                style={{ width: "205px", height: "40px", fontSize: "14px" }}
                className={
                  "snipcart-add-item"
                  // selected === "Size"
                  //   ? "snipcart-add-item selectSize"
                  //   : "snipcart-add-item"
                }
                data-item-url="https://kartchev.studio/products.json"
                data-item-id={pp.id}
                data-item-image={pp.image}
                data-item-name={pp.title}
                data-item-price={pp.price}
                data-item-custom1-name="Size"
                data-item-custom1-options="XS|S|M"
                data-item-custom1-value={selected}
              >
                Acquire
              </button>
            </p>
          </div>
          <div className="img-container">
            <img
              src={`.${pp.image2}`}
              imageAlt="Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
