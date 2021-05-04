import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const options =  {
  timeout: 1000,
  maximumAge: 10000,
  enableHighAccuracy: true
}

export default function Gps() {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
    return
  }

  setStatus('Locating...');

  // navigator.permissions.query({
  //   name: 'geolocation'
  // }).then(function(result) {
  //   console.log(result)
  // })

  function revokePermission(){
    navigator.permissions.revoke({
        name:'geolocation'
    }).then(function(result) {
      console.log(result)
        // report(result.state);
    })
  }

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    setStatus(null);
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }, (res) => {
    console.log(res)
    setStatus('Unable to retrieve your location');

  }, options);

}

  return (
    <div className="App">
      <Button  variant="contained" onClick={getLocation}>Get Location</Button>
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        align="center"
      >
        Coordinates
      </Typography>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}

    </div>
  )
}
