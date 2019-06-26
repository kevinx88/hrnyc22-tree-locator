import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props)
    
  }

  geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

      console.log(mapLink.innerText);

      var updatedLatitude = mapLink.innerText.split(' ')[1].slice(0, 11);
      var updatedLongitude = mapLink.innerText.split(' ')[3].slice(0, 11);
      var formattedLatitude = Number(updatedLatitude.slice(0, updatedLatitude.length-1));
      var formattedLongitude = Number(updatedLongitude);
      console.log(formattedLatitude, formattedLongitude);
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  submitLocation() {
    this.props.onLocationSubmit();
  }

  // Fix form use submitted coordinates
  // Use current location find nearest trees
  // Generate a map

  render() {
    return (<div>
      <h4>Nearest Tree Finder</h4>
      <p>Type in your x-y coordinates <input type='text' value={this.props.latitudeX} onChange={this.props.onChangeLat} ></input>
        <input type='text' value={this.props.longitudeY} onChange={this.props.onChangeLon} ></input>
        <button onClick={this.submitLocation.bind(this)}>Submit</button>
      </p>
      <p>Use your current location <input type='submit' onClick={this.geoFindMe.bind(this)} id='find-me'></input></p>
      <p id = "status"></p>
      <p id = "map-link" target="_blank"></p>
      <p><span>{this.props.locationInfo[0]} </span><span>{this.props.locationInfo[1]}</span></p>
    </div>)
  }
}

export default Location;