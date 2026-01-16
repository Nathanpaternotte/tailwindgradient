import React from "react";
import { useColorStore } from "@/lib/stores/useColorStore";

const Output = () => {
  const { colorOne, colorTwo, colorVia, via, direction, type } =
    useColorStore();

  const typeString = type === "linear" ? `${direction}` : `bg-radial`;

  const stringFormat = () => {
    if (via === "active") {
      return `${typeString} from-${colorOne} via-${colorVia} to-${colorTwo}`;
    } else {
      return `${typeString} from-${colorOne} to-${colorTwo}`;
    }
  };

  return (
    // J'ai ajouté 'truncate' ici
    <div className="bg-neutral-800 w-full text-white rounded-lg p-4 truncate">
      {stringFormat()}
    </div>
  );
};

export default Output;
