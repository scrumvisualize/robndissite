// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const MapComponent = () => {
//   // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyDg9y_gnqOGHjnMNENNBpEwtn7nzwf1jWA',
//   });

//   const center = { lat: -27.4697, lng: 153.0251 }; // Set the initial center of the map

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading maps</div>;

//   return (
//     <div style={{ height: '400px', width: '100%' }}>
//       <GoogleMap mapContainerStyle={{ height: '100%', width: '100%' }} center={center} zoom={10}>
//         <Marker position={center} />
//       </GoogleMap>
//     </div>
//   );
// };

// export default MapComponent;

import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for styling


const MapComponent = () => {
  const [lat, setLat] = React.useState(-27.4697);
  const [lng, setLng] = React.useState(153.0251);
  const [zoom, setZoom] = React.useState(12);

  const markerImage1 = "images/logo1.png";

  const customIcon = new L.Icon({
    iconUrl: '/images/marker.png',
    iconSize: [55, 55],
    iconAnchor: [2, 12],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  

  return (

    <div className="flex-wrap">
      <div className="h-48 md:h-[600px] w-full">
        <MapContainer center={[lat, lng]} zoom={zoom} style={{ height: '100%', zIndex: 0 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <TileLayer
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://maps.stamen.com/toner/">Stamen Design</a>'
          /> */}

          <Marker className="pulse" position={[lat, lng]} icon={customIcon}>
            <Popup>

              <div className="w-[200px] flex flex-col bg-sky-100 p-2 rounded items-center">
                <img src={markerImage1} alt="Marker" className="self-center rounded-full w-14 h-14 mr-2 mb-2" />
                <div>
                  <h3 className="self-center text-base font-montserrat font-bold whitespace-nowrap dark:text-white text-stone-400">JEGNI LIFE Pty Ltd, <br /> Brisbane, QLD</h3>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;