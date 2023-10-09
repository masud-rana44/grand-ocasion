import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const Map = () => {
  return (
    <MapContainer
      center={[23.777176, 90.399452]}
      zoom={13}
      scrollWheelZoom={false}
      className=" rounded-lg"
      style={{ height: "55vh" }}
    >
      <TileLayer attribution={attribution} url={url} />
      {<Marker position={[23.777176, 90.399452]} />}
    </MapContainer>
  );
};
