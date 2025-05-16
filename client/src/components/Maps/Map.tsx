import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

type Props = {
  position: [number, number];
  venue: string;
};

function Map({ position, venue }: Props) {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[100%]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={new Icon({ iconUrl: markerIconPng })}>
        <Popup>{venue}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
