import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { TrackerContext } from "../context/TrackerProvider";
import { useContext } from "react";

const CustomMap = () => {
  // Renamed the variable 'Map' to 'CustomMap'
  const { data, isLoading } = useContext(TrackerContext);

  if (isLoading) {
    return (
      <section className="w-full h-full flex items-center justify-center">
        <p>loading...</p>
      </section>
    );
  }

  const { location } = data;

  if (!location) {
    return null; // Return null if location is not available
  }

  return (
    <section className="w-full h-full" id="map">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: "10" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            {location.city}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default CustomMap; // Updated the export statement to export 'CustomMap' instead of 'Map'
