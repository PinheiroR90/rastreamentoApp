import React, { memo, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { DirectionsCarFilledOutlined, DirectionsCar} from '@mui/icons-material';
import {API_KEY} from '../../dataAPI'

const containerStyle ={
    with: '400px',
    height:'400px',
};
const center = {
    lat: -3.771709,
    lng: -38.561675,
};


const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        id:'google-map-script',
        googleMapsApiKey:API_KEY,
    })

    //const [map, setMap] = useState(null);
    const [open, setOpen] = useState(false);

    // const onLoad = React.useCallback(function callback(map:any) {
    //     console.log('PARAM MAPS == ', map)
    //     const bounds = new window.google.maps.LatLng(center);
    //     map.fitBounds(bounds);
    //     console.log('PARAM bounds == ', bounds)
    //     setMap(map);
    // },[])

    // const onUnMount =  React.useCallback(function callback(map:any){
    //     setMap(null);
    // },[])

    // const handleOpen =()=>{
    //     if(!open){
    //     setOpen(false)
    //     }
    //     setOpen(true)
    // }
    // useEffect(()=>{
    //     setOpen(true)
    // },[open])

    return(
        <div className="maps-container">
           <h2>Maps</h2>
           {isLoaded  && open?
           <div className="maps">
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            // onLoad={onLoad}
            // onUnmount={onUnMount}
            >
                <Marker
                position={center}
                />
                    {/* <DirectionsCar
                    />
                    <DirectionsCarFilledOutlined
                                    /> */}
                
            </GoogleMap>
            </div>
            : <button onClick={()=>setOpen(true)}>Abrir Mapa</button> 
           }
           <button onClick={()=>setOpen(false)}>Fechar Mapa</button>
           
        </div>
    )
}

export const MapsMemory = React.memo(Maps);