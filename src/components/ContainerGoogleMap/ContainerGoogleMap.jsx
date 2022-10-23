import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const containerStyle = {
  height: "719px",
  width: "100%",
};

function ContainerGoogleMap({ issPosition }) {
  const { latitude: lat, longitude: lng } = issPosition;

  const center = {
    lat: Number(lat),
    lng: Number(lng),
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB4H3O8gZQ8w6u8I0OyvXzhdFh_Kz92Z2I",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default ContainerGoogleMap;
