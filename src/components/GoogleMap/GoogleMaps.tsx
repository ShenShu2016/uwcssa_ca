/*
 * @Author: 李佳修
 * @Date: 2022-06-14 15:09:24
 * @LastEditTime: 2022-06-14 17:13:55
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/GoogleMap/GoogleMaps.tsx
 */
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Autocomplete, LoadScript } from '@react-google-maps/api';
import TextField from '@mui/material/TextField';

const containerStyle = {
  width: '600px',
  height: '400px'
};

type Libraries = ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[]
const libraries: Libraries = ['places'];

interface GoogleMapsProp {
  setLocation: React.Dispatch<React.SetStateAction<object>>
}

const GoogleMaps: React.FC<GoogleMapsProp> = ({ setLocation }) => {

  const [autoComplete, setAutoComplete] = useState(null);
  const [input, setInput] = useState('');
  // 温莎大学图书馆 默认地址
  const [center, setCenter] = useState({
    lat: 42.307,
    lng: -83.068
  });
  const onSearchLoad = (autocomplete) => {
    setAutoComplete(autocomplete);
  };

  const onMapLoad = () => {
    // map load 之后 获取当前的地理位置
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  };

  const onPlaceChanged = () => {
    if (autoComplete !== null) {
      const location = autoComplete.getPlace();
      const geometry = location.geometry.location;
      setLocation(location);
      setCenter({
        lat: geometry.lat(),
        lng: geometry.lng()
      });
      setInput(location.formatted_address);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  useEffect(() => {
    const options: NodeListOf<HTMLElement> = document.querySelectorAll('.pac-container');
    if (options) {
      for (let i = 0 ; i < options.length ; i++) {
        options[i].style.zIndex = '9999';
      }
    }
  });

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyCKR_7S6WE5ETziYlastsHnmKuvELeFTW4' libraries={libraries}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onMapLoad}
      >
        <Marker position={center}/>
      </GoogleMap>
      <Autocomplete
        onLoad={onSearchLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <TextField
          sx={{mt: 2}}
          label="Title"
          variant="outlined"
          name={'title'}
          fullWidth
          size='small'
          value={input}
          onChange={(e) => handleInputChange(e)}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default GoogleMaps;