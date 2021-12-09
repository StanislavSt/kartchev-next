import React from "react";
import { useEffect, useState } from "react";

// import dayFront from '../images/day_front.jpg'
// import dayBack from '../images/day_back.jpg'
// import nightFront from '../images/night_front.jpg'
// import nightBack from '../images/night_back.jpg'

export default function Product({ pp, id }) {
  const [products, setProducts] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("Size");

  //   const [backImage,setBackImage] = useState(dayFront)

  console.log(pp)
  const handleOnClick = (e) => {
    setSelected(e.target.textContent);
    setShowDropdown(false);
  };

  useEffect(async () => {
    const secret = process.env.NEXT_PUBLIC_SNIPCART_API;
    const request = await fetch(
      `https://app.snipcart.com/api/products/${id}`,
      {
        headers: {
          Authorization: `Basic ${btoa(secret)}`,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const products = await request.json();
    setProducts(products);
  }, []);

  return (
    <div key={pp.id} style={{ width: "50%" }}>
      <div className="product-container">
        <div className="image-container">
          <img
            src={`.${pp.image}`}
            alt={`Preview of ${pp.title}`}
            className="product-image"
          />
        </div>

        <div className="product-description">
          <h3>{pp.title}</h3>
          <p>{pp.description}</p>
          <p>€{pp.price}</p>

          <div className="dropdown-container">
            <div
              className="dropdown-header"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{selected}</span>
            </div>
            {showDropdown ? (
              <span className="select-box--arrow-up"></span>
            ) : (
              <span className="select-box--arrow-down"></span>
            )}

            {showDropdown ? (
              <div className="dropdown-list">
                {products
                  ? products.variants.map((x,index) => {
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
              className={
                selected === "Size"
                  ? "snipcart-add-item selectSize"
                  : "snipcart-add-item"
              }
              data-item-url="https://stefankartchev.netlify.app/products.json"
              data-item-id={pp.id}
              data-item-image={pp.image}
              data-item-name={pp.title}
              data-item-price={pp.price}
              data-item-custom1-name="Size"
              data-item-custom1-options="Small|Medium|Large"
              data-item-custom1-value={selected}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   // console.log('context is', context)
//   const secret = process.env.NEXT_PUBLIC_SNIPCART_API;
//   const request = await fetch(
//     `https://app.snipcart.com/api/products/sticker_logo`,
//     {
//       headers: {
//         Authorization: `Basic ${btoa(secret)}`,
//         Accept: "application/json",
//       },
//     }
//   );
//   const products = await request.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   };
// }
