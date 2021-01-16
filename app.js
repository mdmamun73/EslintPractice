// eslint-disable-next-line arror-spaceing
"use strict";

const userPrefs = {
  city: "Chicago", lat: 41.878113,
  lon: -87.629799,
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    },
    () => {
      console.log(userPrefs.lat, userPrefs.lon);
    }
  );
} else {
  console.log(userPrefs.lat, userPrefs.lon);
}

const makeLowerCase = (input) => {
  return String(input).toLowerCase();
};

userPrefs.setting = makeLowerCase(window.prompt("Urban or rural?"));

console.log(userPrefs["setting"]);

fetch("https://developer.nps.gov/api/v1/parks?stateCode=il")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.status;
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

fetch({
  method: "GET",
  url: "https://developer.nps.gov/api/v1/parks?stateCode=il",
  "x-api-key": "Insert-Api-Key-Here",
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.status;
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

const region = (city) => {
  if (city === "Dhaka") {
    return "Bangladesh";
  } else if (city === "Los Angeles") {
    return "North America";
  } else {
    return "lookup";
  }
};

// calculate distance between two geocoordinates
const distanceTo = (lat1, lon1, lat2, lon2, unit) => {
  const rlat1 = (Math.PI * lat1) / 180;
  const rlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const rtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(rlat1) * Math.sin(rlat2) +
    Math.cos(rlat1) * Math.cos(rlat2) * Math.cos(rtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === "K") {
    dist = dist * 1.609344;
  } else if (unit === "N") {
    dist = dist * 0.8684;
  }
  return dist.toFixed(0);
};

console.log(
  distanceTo(
    userPrefs.lat,
    userPrefs.lon,
    testLocation.lat,
    testLocation.lon,
    "M"
  )
);

const region2 = ((city) => {
  if (city === "Buenos Aires") {
    return "South America";
  } else if (city === "Los Angeles") {
    return "North America";
  } else if (city === "Beijing") {
    return "Asia";
  } else {
    return "lookup";
  }
});

const updateUserPrefs = function (date) {
  userPrefs = refreshData(date);
};

window.addEventListener('DOMContentLoaded', function () {
  updateUserPrefs(date);
});

fetch('https://developer.nps.gov/api/v1/parks?stateCode=il')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res.status;
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error));
