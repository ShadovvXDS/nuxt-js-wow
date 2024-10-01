export const shortcuts: {
  name: string;
  hold?: "cmd" | "shift";
  key: string | (typeof specialKeys)[number];
}[] = [
  {
    name: "Undo",
    hold: "cmd",
    key: "Z",
  },
  {
    name: "Redo",
    hold: "cmd",
    key: "Y",
  },
  {
    name: "Bring forward",
    hold: "cmd",
    key: "]",
  },
  {
    name: "Send backward",
    hold: "cmd",
    key: "[",
  },
  {
    name: "Bring to front",
    key: "]",
  },
  {
    name: "Send to back",
    key: "[",
  },
  {
    name: "Deselect",
    key: "ESC",
  },
  {
    name: "Remove",
    key: "backspace",
  },
  {
    name: "Show/Hide Grid",
    hold: "shift",
    key: "G",
  },
  {
    name: "Move",
    key: "V",
  },
  {
    name: "Sketch",
    key: "S",
  },
  {
    name: "Line",
    key: "L",
  },
  {
    name: "Shapes",
    key: "O",
  },
  {
    name: "Icons",
    key: "I",
  },
  {
    name: "Brands",
    key: "B",
  },
  {
    name: "Upload Image",
    hold: "shift",
    key: "K",
  },
  {
    name: "Eraser",
    key: "E",
  },
  {
    name: "Fullscreen / Minimized",
    hold: "cmd",
    key: "keyReturn",
  },
  {
    name: "Download",
    hold: "shift",
    key: "S",
  },
  {
    name: "Clear Everything",
    hold: "cmd",
    key: "backspace",
  },
];