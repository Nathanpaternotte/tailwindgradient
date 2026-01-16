"use client";
import React, { useState } from "react";
import Output from "./Output";
import { useColorStore } from "@/lib/stores/useColorStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  const {
    via,
    setVia,
    directionCss,
    setDirectionCss,
    type,
    setType,
    setDirection,
  } = useColorStore();

  const directionMap: Record<string, string> = {
    "to top": "bg-linear-to-t",
    "to bottom": "bg-linear-to-b",
    "to left": "bg-linear-to-l",
    "to right": "bg-linear-to-r",
    "to top left": "bg-linear-to-tl",
    "to top right": "bg-linear-to-tr",
    "to bottom left": "bg-linear-to-bl",
    "to bottom right": "bg-linear-to-br",
  };

  const directionsHandler = (value: string) => {
    setDirectionCss(value);
    const tailwindClass = directionMap[value];
    setDirection(tailwindClass);
  };

  return (
    <div className="bg-white p-4 rounded-lg border-2 border-neutral-200 grid md:grid-cols-2 space-y-4 md:space-y-0">
      <div>
        <h3 className="text-slate-700 font-semibold text-2xl">
          Gradient settings
        </h3>
        <p>A simple, free tool to generate basic gradients for Tailwind CSS.</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-1">
          <div className="text-slate-700 font-semibold text-lg">Via</div>
          <Select value={via} onValueChange={(value) => setVia(value)}>
            <SelectTrigger className="w-full text-lg">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="active">Active</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-slate-700 font-semibold text-lg">Direction</div>
          <Select
            value={directionCss}
            disabled={type === "radial"}
            onValueChange={(value) => directionsHandler(value)}
          >
            <SelectTrigger className="w-full text-lg">
              <SelectValue placeholder="Select direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="to top">Top</SelectItem>
                    <SelectItem value="to bottom">Bottom</SelectItem>
                    <SelectItem value="to left">Left</SelectItem>
                    <SelectItem value="to right">Right</SelectItem>
                    <SelectItem value="to top left">Top Left</SelectItem>
                    <SelectItem value="to top right">Top Right</SelectItem>
                    <SelectItem value="to bottom left">Bottom Left</SelectItem>
                    <SelectItem value="to bottom right">
                      Bottom Right
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-slate-700 font-semibold text-lg">Type</div>
          <Select value={type} onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-full text-lg">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="linear">Linear</SelectItem>
                    <SelectItem value="radial">Radial</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-3">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Settings;
