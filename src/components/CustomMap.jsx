import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { CustomMarkerIcon } from "../components";
import { TrackerContext } from "../context/TrackerProvider";
import { useContext } from "react";

const CustomMap = () => {
  // Renamed the variable 'Map' to 'CustomMap'
  const { data, isLoading } = useContext(TrackerContext);
  const access_token = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;
  const username = import.meta.env.VITE_REACT_APP_MAPBOX_USERNAME;
  const styleID = import.meta.env.VITE_REACT_APP_STYLE_ID;

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
    <section className="w-full flex-1" id="map" role="main">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%", zIndex: "10" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
          url={`https://api.mapbox.com/styles/v1/${username}/${styleID}/tiles/256/{z}/{x}/{y}@2x?access_token=${access_token}`}
        />
        <Marker position={[location.lat, location.lng]} icon={CustomMarkerIcon}>
          <Popup>{location.city}</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default CustomMap; // Updated the export statement to export 'CustomMap' instead of 'Map'
