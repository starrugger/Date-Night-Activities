import React, { useState } from 'react';

export function MapDisplay(props) {
    //seting up hook
    const [currentValue, replacementValue] = useState(props.value)


    return (
        <iframe title="google-map" className="map" src={props.value}></iframe>
    )
}