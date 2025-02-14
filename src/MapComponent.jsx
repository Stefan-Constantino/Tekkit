import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: "auto", width: "50%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.7128, -74.0060]}>
        <Popup>A sample marker on the map!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;