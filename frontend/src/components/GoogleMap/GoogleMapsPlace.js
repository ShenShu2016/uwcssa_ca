import React, { useEffect, useMemo, useRef, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

let address = null;
let geocoder;

export async function GetAddress() {
  console.log("我正在找经纬度");
  let newAddress;
  // console.log("getAddress");
  console.log(address);
  if (address.place_id) {
    await new Promise((resolve) => {
      geocoder.geocode(
        { placeId: address.place_id },
        function (results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            newAddress = {
              ...address,
              lat: Number(lat),
              lng: Number(lng),
              geocodingResult: results,
            };
            resolve();
          } else {
            console.log(
              "Geocode was not successful for the following reason: " + status
            );
          }
        }
      );
    });
    return newAddress;
  } else {
    return undefined;
  }
}

function loadScript(src, position, id) {
  console.log("我正在loadScript");
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}
const autocompleteService = { current: null };

// console.log("autocompleteService", autocompleteService);
export default function GoogleMaps({
  userInputValue = null,
  label = "添加地址",
  ...rest
}) {
  const [value, setValue] = useState(userInputValue);
  const [inputValue, setInputValue] = useState("");
  // const [apartmentNumbers, setApartmentNumbers] = useState("");
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  // console.log(address);
  useEffect(() => {
    address = {
      description: value && value.description,
      place_id: value && value.place_id,
      reference: value && value.reference,
      terms: value && value.terms,
      types: value && value.types,
      // apartmentNumbers: apartmentNumbers,
    };
  });

  if (typeof window !== "undefined" && !loaded.current) {
    // console.log(
    //   'typeof window !== "undefined" && !loaded.current',
    //   typeof window !== "undefined",
    //   !loaded.current
    // );
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCKR_7S6WE5ETziYlastsHnmKuvELeFTW4&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );
  useEffect(() => {
    let active = true;

    const initial = async () => {
      if (!autocompleteService.current && window.google) {
        // console.log(!autocompleteService.current, window.google.maps.places);
        // console.log(autocompleteService.current);
        autocompleteService.current =
          await new window.google.maps.places.AutocompleteService();
        geocoder = await new window.google.maps.Geocoder();
      }
    };

    initial();

    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }
    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }
        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Box>
      {/* <TextField
        id="setApartmentNumbers"
        label="公寓房间号"
        helperText="住公寓的可以填，house不需要"
        value={apartmentNumbers}
        onChange={(event) => {
          setApartmentNumbers(event.target.value);
        }}
        fullWidth
        sx={{ my: 1 }}
      /> */}
      <Autocomplete
        id="google-map-demo"
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={(x) => x}
        // {...rest}
        options={options}
        {...rest}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length])
          );
          // console.log(option);
          return (
            <div key={option.place_id}>
              <li {...props}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Box
                      component={LocationOnIcon}
                      sx={{ color: "text.secondary", mr: 2 }}
                    />
                  </Grid>
                  <Grid item xs>
                    {parts.map((part, index) => (
                      <div key={index}>
                        <span
                          style={{
                            color: "green",
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
                          {part.text}
                        </span>
                      </div>
                    ))}
                    <Typography variant="body2" color="text.secondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            </div>
          );
        }}
      />
      <Box sx={{ my: 1, height: "15px" }}>
        <img
          src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
          style={{ float: "right", height: "100%" }}
        />
      </Box>
    </Box>
  );
}
