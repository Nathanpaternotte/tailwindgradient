import { create } from "zustand";

type SettingsState = {
  colorOne: string;
  colorOneHex: string;
  colorTwo: string;
  colorTwoHex: string;
  colorVia: string;
  colorViaHex: string;
  via: string;
  type: string;
  directionCss: string;
  direction: string;
};

type SettingsActions = {
  setColorOne: (color: string) => void;
  setColorTwo: (color: string) => void;
  setColorVia: (color: string) => void;
  setColorOneHex: (hex: string) => void;
  setColorTwoHex: (hex: string) => void;
  setColorViaHex: (hex: string) => void;
  setVia: (via: string) => void;
  setType: (type: string) => void;
  setDirectionCss: (direction: string) => void;
  setDirection: (direction: string) => void;
};

export const useSettingsStore = create<SettingsState & SettingsActions>(
  (set) => ({
    colorOne: "red-500",
    colorOneHex: "#FF0000",
    colorTwo: "orange-600",
    colorTwoHex: "#FFA500",
    colorVia: "yellow-500",
    colorViaHex: "#FFFF00",
    via: "inactive",
    type: "linear",
    directionCss: "to left",
    direction: "bg-linear-to-l",
    setColorOne: (color) => set({ colorOne: color }),
    setColorTwo: (color) => set({ colorTwo: color }),
    setColorVia: (color) => set({ colorVia: color }),
    setColorOneHex: (hex) => set({ colorOneHex: hex }),
    setColorTwoHex: (hex) => set({ colorTwoHex: hex }),
    setColorViaHex: (hex) => set({ colorViaHex: hex }),
    setVia: (via: string) => set({ via: via }),
    setType: (type: string) => set({ type: type }),
    setDirectionCss: (direction: string) => set({ directionCss: direction }),
    setDirection: (direction: string) => set({ direction: direction }),
  })
);
