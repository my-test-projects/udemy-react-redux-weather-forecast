import React from 'react';
import { GoogleMap, withGoogleMap } from "react-google-maps"

export default withGoogleMap(props =>
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lng }} />
);

