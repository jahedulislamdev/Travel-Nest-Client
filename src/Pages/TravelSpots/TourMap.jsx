import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
   width: '100%',
   height: '400px'
};

const center = {
   lat: 23.8103,  // Example: Dhaka
   lng: 90.4125
};

const MyMap = () => {
   return (
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
         </GoogleMap>
      </LoadScript>
   );
};

export default MyMap;
