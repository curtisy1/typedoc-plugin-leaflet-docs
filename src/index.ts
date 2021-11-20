import { Application } from "typedoc";

export function load(app: Application) {
  const leafletUri = "https://leafletjs.com/reference.html#";
  app.renderer.addUnknownSymbolResolver("@types/leaflet", (name) => {
    return `${leafletUri}${name.toLowerCase()}`;
  });
}
