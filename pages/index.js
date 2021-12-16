import Head from "next/head";

import Link from "next/link";

import { useEffect, useState } from "react";
import React from "react";
import { Shake } from "reshake";
import { Work } from "../components/Work";
// import { Product } from './components/Product'

function App() {
  const [logoClass, setLogoClass] = useState("logo");
  const [shopClass, setShopClass] = useState("shop-hidden");
  const [contactClass, setContactClass] = useState("contact-hidden");
  const [shakeActive, setShakeActive] = useState(false);

  const logoClick = () => {
    if (contactClass === "contact-form") {
      setContactClass("contact-hidden");
      setLogoClass("logo");
    }
    if (shopClass === "shop-hidden") setShopClass("shop");
    else setShopClass("shop-hidden");
  };

  const reachClick = () => {
    setContactClass("contact-form");
    setLogoClass("logo-contact");
    setShopClass("shop-hidden");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeActive(true);
      setTimeout(() => {
        setShakeActive(false);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <Head>
        <title>Kartchev Studio</title>
        <meta name="description" content="Kartchev studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="middle">
        <Work
          images={["/images/selective_memory.jpg"]}
          video={"./video/selective_memory_in_motion02.mp4"}
          header="Selective Memory"
          content="Part of the group show 'Casting The Runes' curated by Arthur Poujois. Hosted by Harlesden High Street in partnership with Underground Flower."
          location="2021 - London, UK"
          linksObject={[
            ["https://www.arthurpoujois.com/", "arthur poujois"],
            ["http://undergroundflower.com/about.html", "underground flower"],
            // ["https://www.sova-audio.co.uk/", "sova audio"],
          ]}
        />

        <Work
          images={[
            "/images/fear_foliage1.jpg",
            "/images/fear_foliage2.jpg",
            "/images/fear_foliage3.jpg",
          ]}
          header="Fear the foliage"
          content="Print Design and Development for Digital Film directed by Shayli Harrison for Digital Village"
          location="2020 - The Metaverse"
          linksObject={[
            ["https://mutani.io/", "mutani"],
            ["https://digitalvillage.io/", "digital village"],
          ]}
        />

        <Work
          images={[
            "/images/REST_cover.jpg",
            "/images/REST1.jpg",
            "/images/REST2.jpg",
            "/images/REST3.jpg",
            "/images/REST4.jpg",
            "/images/REST5.jpg",
            "/images/REST6.jpg",
          ]}
          header="Rest"
          content="Print design and production development for Michele Rizzo
                  Sculptural and performative installation; in the pictures: resin, aluminium, brass, printed cotton.
                  Courtesy: the artist, Fondazione Sandretto Re Rebaudengo, Quandriennale d’Arte di Roma.
                  "
          location="2020 - Rome, Italy"
          credits="Photo credits: Cristian Cocurullo"
          linksObject={[
            [
              "https://stedelijkstudies.com/michele-rizzo-rest-2021/",
              "michele rizzo",
            ],
            [
              "https://quadriennale2020.com/en/artist/rizzo/",
              "quadriennale di roma 2020",
            ],
          ]}
        />

        <Work
          images={[
            "/images/luxus1.jpg",
            "/images/luxus2.jpg",
            "/images/luxus3.jpg",
            "/images/luxus4.jpg",
            "/images/luxus5.jpg",
            "/images/luxus6.jpg",
          ]}
          header="Luxus für Alle "
          content="Print design and development for Annemarie Šarić. MoMu Award winner"
          location="2020 - Antwerp, Belgium"
          credits="Photo credits: Lee Wei"
          linksObject={[
            [
              "https://www.momu.be/en/magazine/momu-award2020",
              "momu award annemarie saric",
            ],
            ["https://www.sweeriouslee.com/", "lee wei"],
          ]}
        />

        <Work
          images={[
            "/images/RR_Rombaut_Heels_1.jpg",
            "/images/RR_Rombaut_Heels_3.jpg",
            "/images/RR_Rombaut_Heels_4.jpg",
          ]}
          header="DYSMORPHIA Heels"
          content="Design development and production follow up for ROMBAUT"
          location="2019 - Paris, France"
          linksObject={[["https://rombautparis.com/", "rombaut"]]}
        />

        <Work
          images={[
            "/images/ambivalenceBG.jpg",
            "/images/ambivalence01.jpg",
            "/images/ambivalence02.jpg",
          ]}
          images2={[
            "/images/ambivalence03.jpg",
            "/images/ambivalence04.jpg",
            "/images/ambivalence06.jpg",
          ]}
          video={"/video/sam_rolfes.mp4"}
          video2={"/video/sam_rolfes2.mp4"}
          header="Ambivalence"
          content="Diploma Graduation Collection Holographic visuals by Sam Rolfes"
          location="2018 - Antwerp, Belgium"
          credits="Photo credits: Zlatimir Arakliev, Etienne Todoir"
          linksObject={[
            [
              "https://www.instagram.com/zlatimirarakliev/?hl=en",
              "zlatimir arakliev",
            ],
            ["https://rolfes.team/", "sam rolfes"],
          ]}
        />

        <Work
          images={[
            "/images/miscibleBG.jpg",
            "/images/miscibledisplacement01.jpg",
            "/images/miscibledisplacement02.jpg",
            "/images/miscibledisplacement03.jpg",
          ]}
          video={"/video/miscible.mp4"}
          header="Miscible Displacement"
          content="Bachelor collection"
          location="2016 - Antwerp, Belgium"
          credits="Photo credits: Kiril Dimitrov"
        />
      </div>

      <div className={logoClass}>
        <Shake
          h={0}
          v={100}
          r={0}
          dur={530}
          int={54.8}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}
          active={shakeActive}
          style={{ alignSelf: "flex-end" }}
        >
          <img
            onClick={() => logoClick()}
            onMouseLeave={() => {}}
            className="logo-img"
            alt="logo"
            src="./images/logo_magenta.png"
          ></img>
        </Shake>

        <span className={shopClass} onClick={() => reachClick()}>
          REACH
        </span>
        <Link href="/shop">
          <a className={shopClass}>ACQUIRE</a>
        </Link>
        <div className={contactClass}>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input className="input" placeholder="NAME:" type="text" />
            <input className="input" placeholder="EMAIL:" type="email" />
            <textarea
              className="textarea"
              placeholder="QUESTION:"
              name="message"
            />
            <button className="submit" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
