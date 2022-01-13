import React, { Suspense, lazy } from "react";

const ThreeCanvas = lazy(() => import("./three-canvas"));

const ThreeLazy = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ThreeCanvas />
      </Suspense>
    </>
  );
};

export default ThreeLazy;
