"use client";
import HeroLarge from "@/app/assets/hero-image.jpg";
import HeroGirlSmall from "@/app/assets/hero-girl-small.jpg";
import HeroBoySmall from "@/app/assets/hero-boy-small.jpg";
import AboutBottomLeft from "@/app/assets/bottom-left.jpg";
import AboutTopRight from "@/app/assets/top-right.jpg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const randHero = () => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum >= 1 ? HeroBoySmall : HeroGirlSmall;
};

const HeroSmall = randHero();

const HomeContent = ({ isMobile }) => {
  const [dimensions, setDimensions] = useState(
    isMobile
      ? {
          height: 400,
          width: 900,
        }
      : null
  );

  const aboutElement = useRef(null);
  const heroElement = useRef(null);

  const handleAboutBtn = () => {
    aboutElement.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleTopBtn = () => {
    heroElement.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    const debouncedHandleResize = debounce(handleResize, 150);

    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize);
  });

  return (
    <>
      <div
        ref={heroElement}
        className='home-content'
        style={{
          backgroundImage: `url(${
            dimensions?.width < 1700 ? HeroSmall.src : HeroLarge.src
          })`,
        }}
      >
        <Link className='women' href={"/shop/?category=women"}>
          WOMEN
        </Link>
        <Link className='men' href={"/shop/?category=men"}>
          MEN
        </Link>
      </div>
      <button className='about-btn' onClick={handleAboutBtn}>
        About
      </button>
      <div ref={aboutElement} className='about'>
        <div className='left-top'>
          <h3>Brand Philosophy</h3>
          <p>
            Urban Tide has a clear mission: to dress the young, dynamic
            generation that’s deeply engaged with their environment, community,
            and each other. These individuals embrace casual style, breaking
            free from stereotypes, and are looking for clothing that makes them
            feel confident and authentic. Urban Tide captures the essence of
            global fashion trends, blending them with street culture and the
            vibrant energy found in the trendiest clubs. We reimagine these
            influences to create garments that are not only stylish but also
            comfortable, versatile, and easy to wear. We understand that fashion
            is more than just clothing—it’s a reflection of who you are and the
            world you live in. Urban Tide evolves alongside our customers,
            keeping an eye on new technologies, social movements, and the latest
            trends in art and music to ensure that our collections are always
            fresh, relevant, and uniquely expressive.
          </p>
        </div>
        <div
          className='right-top'
          style={{ backgroundImage: `url(${AboutTopRight.src})` }}
        ></div>
        <div className='right-bottom'>
          <h3>Collections</h3>
          <ul>
            <li>
              <b>Street Flow:</b> Inspired by the pulse of urban landscapes,
              this collection features loose-fitting tees, joggers, and hoodies
              with graphic designs and vibrant prints that speak to the culture
              of the streets. Perfect for anyone who values comfort but wants to
              make a bold statement.
            </li>
            <li>
              <b>Club Nights:</b> Designed for the night owl who thrives in the
              heart of the city’s club scene. This collection includes sleek
              bomber jackets, cropped tops, and slim-cut jeans infused with
              metallic details, neon accents, and futuristic elements that glow
              under the lights.
            </li>
            <li>
              <b>Eco Essentials:</b> A line that speaks to the
              environmentally-conscious youth. Made from sustainable materials
              like organic cotton and recycled fabrics, these are timeless
              basics that feel good inside and out—think soft, earth-tone
              sweatshirts, classic crew necks, and versatile joggers.
            </li>
            <li>
              <b>Tech Fusion:</b> Where fashion meets technology. This
              collection brings in wearable tech influences with jackets
              featuring integrated phone pockets, moisture-wicking fabrics, and
              UV-protection layers, all designed for the digital nomads and
              modern adventurers of today.
            </li>
            <li>
              <b>Art Rebel:</b> A tribute to the free-spirited creatives who are
              shaping tomorrow’s culture. This capsule includes bold, artsy
              prints, graffiti-inspired patterns, and statement pieces with
              custom hand-painted designs. Each piece feels like a wearable work
              of art.
            </li>
          </ul>
        </div>
        <div
          className='left-bottom'
          style={{ backgroundImage: `url(${AboutBottomLeft.src})` }}
        ></div>
        <button className='top-btn' onClick={handleTopBtn}>
          Top
        </button>
      </div>
    </>
  );
};

export default HomeContent;
