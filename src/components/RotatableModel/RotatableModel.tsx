import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMouse } from "rooks";
import { Leva, useControls } from "leva";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useSpring } from "@react-spring/core";

type ModelProps = {
  model: THREE.Group;
};

function Model({ model }: ModelProps) {
  const ref = useRef<THREE.Mesh>();

  const { clientX, clientY } = useMouse();

  const { rotateX, rotateY, meshX, meshY, meshZ } = useControls(
    {
      rotateX: { value: 0.3, min: 0, max: 10, step: 0.1 },
      rotateY: { value: 1, min: 0, max: 10, step: 0.1 },
      meshX: { value: 0, min: -100, max: 100, step: 1 },
      meshY: { value: 0, min: -100, max: 100, step: 1 },
      meshZ: { value: -20, min: -100, max: 100, step: 1 },
    },
    { hidden: true }
  );

  const [{ x, y }] = useSpring(
    () => ({
      x: clientX,
      y: clientY,
      config: { mass: 5, tension: 500, friction: 50, precision: 0.0001 },
    }),
    [clientX, clientY]
  );

  useFrame(() => {
    const normalizedMouseX =
      (2 * y?.get() - window.innerHeight) / window.innerHeight;
    const normalizedMouseY =
      (2 * x?.get() - window.innerWidth) / window.innerWidth;
    if (typeof ref.current !== "undefined") {
      ref.current.rotation.x = rotateX * Math.PI * normalizedMouseX;
      ref.current.rotation.y = rotateY * Math.PI * normalizedMouseY;
    }
  });

  return (
    <>
      <Leva
        hidden // default = false, when true the GUI is hidden
      />
      <group ref={ref} position={[meshX, meshY, meshZ]} scale={0.007}>
        <primitive object={model} />
      </group>
    </>
  );
}

type RotatableModelProps = {
  getLoadedPercentage: (percentage: number) => void;
};

const RotatableModel = ({ getLoadedPercentage }: RotatableModelProps) => {
  const fbxModel = useLoader(FBXLoader, "/models/model.fbx", null, (event) => {
    getLoadedPercentage(Math.round((event.loaded / event.total) * 100));
  });

  return (
    <Canvas style={{ height: "45vh" }}>
      <ambientLight />
      <pointLight position={[10, 1, -10]} />
      <Model model={fbxModel} />
    </Canvas>
  );
};

export default RotatableModel;
