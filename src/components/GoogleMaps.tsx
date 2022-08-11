import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../pages/AboutPage/aboutpage.css'

export default function GoogleMaps() {
    const { isLoaded } = useLoadScript({googleMapsApiKey:
         "AIzaSyBWdCkI7Xf8DBGFLfeYoAnR20NuLcmwfSU"})
    if(!isLoaded) return <div>Loading maps...</div>
    return <Map />;
}


function Map() {
    const position = useMemo(() => ({lat: 49.849769, lng:24.022544}), []);

    return (
        <GoogleMap zoom={10} center={position} mapContainerClassName='map-container'>
            <Marker position={position} />
        </GoogleMap>
    );
}