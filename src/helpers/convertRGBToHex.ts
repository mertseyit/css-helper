export const convertRGBToHex = (rgb:number[]) => {
    
    const hex = rgb.map((color) => {
      const hexValue = color.toString(16);
      return hexValue.length === 1 ? "0" + hexValue : hexValue;
    });
    return "#" + hex.join("");
  }