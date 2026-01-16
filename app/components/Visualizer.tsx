"use client";
import React from "react";
import { useColorStore } from "@/lib/stores/useColorStore";
const Visualizer = () => {
  const { colorOneHex, colorTwoHex, colorViaHex, via, directionCss, type } =
    useColorStore();
  return (
    <div className="relative w-full h-full border-2 border-neutral-200 rounded-lg aspect-video overflow-hidden">
      <div
        className="inset-0  relative w-full h-full"
        style={{
          backgroundImage: `${type}-gradient(${type === "linear" ? directionCss : type === "radial" ? "circle" : ""}, ${colorOneHex} ${via === "active" ? `, ${colorViaHex} ` : ""}, ${colorTwoHex})`,
        }}
      ></div>
    </div>
  );
};

export default Visualizer;
