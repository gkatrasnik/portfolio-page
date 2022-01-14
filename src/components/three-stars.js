import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import ThreeStar from "./three-star";

const RANGE = 400;

const ThreeStars = () => {
  const mesh = useRef(null);

  const [documentHeight, setDocumentHeight] = useState(0);

  //move stars on scroll
  const onScroll = () => {
    let yOffset = window.pageYOffset;
    let scrollHeight = documentHeight - window.innerHeight;
    let currentScroll = yOffset / scrollHeight;

    return (
      (mesh.current.rotation.x = currentScroll / 3),
      (mesh.current.rotation.y = currentScroll / 2)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    setDocumentHeight(
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    );
    // clean up code
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <mesh ref={mesh}>
      {new Array(200).fill("").map((_, index) => {
        const x = Math.random() * RANGE - RANGE / 2;
        const y = Math.random() * RANGE - RANGE / 2;
        const z = Math.random() * RANGE - RANGE / 2;

        return <ThreeStar key={index} x={x} y={y} z={z} />;
      })}
    </mesh>
  );
};

export default ThreeStars;
