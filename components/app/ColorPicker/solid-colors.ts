import colors from "./real-colors.json";

interface Colors {
  [key: string]: {
    name: string;
    hex: string;
  }[];
}

const tmp: Colors = colors;

export const solidColors = [{
  name: "",
  hex: "transparent",
}, ...Object.keys(colors).flatMap(color => tmp[color])];