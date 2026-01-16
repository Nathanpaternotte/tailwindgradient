"use client";
import React, { useEffect } from "react";
import { tailwindColors } from "@/lib/tailwindColors";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useColorStore } from "@/lib/stores/useColorStore";

const Colors = () => {
  const colors = tailwindColors();
  const {
    colorOne,
    colorVia,
    colorTwo,
    via,
    setColorOne,
    setColorVia,
    setColorTwo,
    setColorOneHex,
    setColorTwoHex,
    setColorViaHex,
  } = useColorStore();

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm max-w-4xl mx-auto w-full">
      <Tabs defaultValue="one" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="one">First</TabsTrigger>
          {via === "active" && <TabsTrigger value="via">Via</TabsTrigger>}
          <TabsTrigger value="two">Last</TabsTrigger>
        </TabsList>

        <TabsContent
          value="one"
          className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200 px-4"
        >
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col gap-3 mb-8">
              <h2 className="text-sm font-semibold text-slate-700 capitalize sticky top-0 bg-white py-1 z-10">
                {color.name}
              </h2>

              <div className="flex flex-wrap gap-4">
                {Object.entries(color.shades).map(([shade, hexValue]) => (
                  <div
                    key={color.name + "-" + shade}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      onClick={() => {
                        setColorOne(color.name + "-" + shade);
                        setColorOneHex(hexValue as string);
                      }}
                      className={`w-10 h-10 rounded-lg shadow-sm border border-black/5 hover:scale-105 transition-transform cursor-pointer ${
                        colorOne === color.name + "-" + shade
                          ? "border-green-500 border-3 shadow-xl scale-110"
                          : ""
                      }`}
                      style={{ backgroundColor: hexValue as string }}
                    />
                    <span
                      className={`text-xs  font-medium ${colorOne === color.name + "-" + shade ? "text-green-500" : "text-slate-500"}`}
                    >
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="via"
          className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200 px-4"
        >
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col gap-3 mb-8">
              <h2 className="text-sm font-semibold text-slate-700 capitalize sticky top-0 bg-white py-1 z-10">
                {color.name}
              </h2>

              <div className="flex flex-wrap gap-4">
                {Object.entries(color.shades).map(([shade, hexValue]) => (
                  <div
                    key={color.name + "-" + shade}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      onClick={() => {
                        setColorVia(color.name + "-" + shade);
                        setColorViaHex(hexValue as string);
                      }}
                      className={`w-10 h-10 rounded-lg shadow-sm border border-black/5 hover:scale-105 transition-transform cursor-pointer ${
                        colorVia === color.name + "-" + shade
                          ? "border-green-500 border-3 shadow-xl scale-110"
                          : ""
                      }`}
                      style={{ backgroundColor: hexValue as string }}
                    />
                    <span
                      className={`text-xs  font-medium ${colorVia === color.name + "-" + shade ? "text-green-500" : "text-slate-500"}`}
                    >
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="two"
          className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200 px-4"
        >
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col gap-3 mb-8">
              <h2 className="text-sm font-semibold text-slate-700 capitalize sticky top-0 bg-white py-1 z-10">
                {color.name}
              </h2>

              <div className="flex flex-wrap gap-4">
                {Object.entries(color.shades).map(([shade, hexValue]) => (
                  <div
                    key={color.name + "-" + shade}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      onClick={() => {
                        setColorTwo(color.name + "-" + shade);
                        setColorTwoHex(hexValue as string);
                      }}
                      className={`w-10 h-10 rounded-lg shadow-sm border border-black/5 hover:scale-105 transition-transform cursor-pointer ${
                        colorTwo === color.name + "-" + shade
                          ? "border-green-500 border-3 shadow-xl scale-110"
                          : ""
                      }`}
                      style={{ backgroundColor: hexValue as string }}
                    />
                    <span
                      className={`text-xs  font-medium ${colorTwo === color.name + "-" + shade ? "text-green-500" : "text-slate-500"}`}
                    >
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
