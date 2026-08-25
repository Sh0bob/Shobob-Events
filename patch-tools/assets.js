const fs = require("fs");
const path = require("path");

function pngToBase64(filePath) {
  const abs = path.resolve(__dirname, "..", filePath);
  const data = fs.readFileSync(abs);
  return data.toString("base64");
}


module.exports = {
  ttwcLogo: pngToBase64("assets/botc-logo.png"),

  banner: pngToBase64("assets/banner.png"),

  transparentPixel:
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",

  crownIcon: pngToBase64("assets/ttwc-crown.png"),

  sideButton1: pngToBase64("assets/ttbutton.png"),
  sideButton2: pngToBase64("assets/sebutton.png"),
  sideButton3: pngToBase64("assets/shobobbutton.png"),

  partners: pngToBase64("assets/partners2.png"),
};
