"use client";
import React from "react";
import { useSettingsStore } from "@/lib/stores/useSettingsStore";
const Visualizer = () => {
  const { colorOneHex, colorTwoHex, colorViaHex, via, directionCss, type } =
    useSettingsStore();
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
