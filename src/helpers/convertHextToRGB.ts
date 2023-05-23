export const convertHexToRGB = (hexColor: string): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hexColor = hexColor.replace(shorthandRegex, (r, g, b) => {
    return r + r + g + g + b + b;
  });

  let r = 0
  let g = 0
  let b = 0
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  if (result !== null) {
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
  }
  return `rgba(${r}, ${g}, ${b} `;
};