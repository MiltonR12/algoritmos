export const coloresTailwind = [
  "red",
  "blue",
  "green",
  "yellow",
  "indigo",
  "purple",
  "teal",
  "pink",
  "gray",
];

export const randomColor = () => {
  const color = coloresTailwind[Math.floor(Math.random() * 10)];
  const newColor = "bg-" + color + "-700 " + "border-t-2 " + "border-" + color + "-500";
  return newColor
};
