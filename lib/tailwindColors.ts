import colors from "tailwindcss/colors";

export function tailwindColors() {
  // Liste des clés à exclure car ce ne sont pas des palettes de couleurs (50-950)
  const exclusions = [
    "inherit",
    "current",
    "transparent",
    "black",
    "white",
    "lightBlue",
    "warmGray",
    "trueGray",
    "coolGray",
    "blueGray",
  ];

  return Object.entries(colors)
    .filter(([colorName]) => !exclusions.includes(colorName))
    .map(([colorName, shades]) => ({
      name: colorName,
      shades: shades, // Contient l'objet { 50: '...', 100: '...', etc. }
    }));
}
