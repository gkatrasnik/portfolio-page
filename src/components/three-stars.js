import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import ThreeStar from "./three-star";

const RANGE = 500;

const ThreeStars = () => {
  const mesh = useRef(null);

  const [offset, setOffset] = useState(0);

  //move stars on scroll
  useEffect(() => {
    const onScroll = () => {
      return (
        (mesh.current.rotation.x += 0.01), (mesh.current.rotation.y += 0.01)
      );
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 
  useFrame(() => {
    return (
      (mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += 0.001)
    );
  });*/

  return (
    <mesh ref={mesh}>
      {new Array(300).fill("").map((_, index) => {
        const x = Math.random() * RANGE - RANGE / 2;
        const y = Math.random() * RANGE - RANGE / 2;
        const z = Math.random() * RANGE - RANGE / 2;

        return <ThreeStar key={index} x={x} y={y} z={z} />;
      })}
    </mesh>
  );
};

export default ThreeStars;
