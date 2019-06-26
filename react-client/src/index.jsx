import React from 'react';
import ReactDOM from 'react-dom';
import https from 'https';
import axios from 'axios';
// import List from './components/List.jsx';
import Location from './components/Location.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{id: 1046, address: "73 WEST HOUSTON STREET", latitude: "40.72663958", longitude: "-73.99936836", spc_common: "willow oak"},
      {id: 1065, address: "138 WEST 11 STREET", latitude: "40.73599985", longitude: "-73.99985935", spc_common: "pin oak"},
      {id: 1379, address: "73 WEST HOUSTON STREET", latitude: "40.72666328", longitude: "-73.99941653", spc_common: "willow oak"},
      {id: 1407, address: "157 HESTER STREET", latitude: "40.71751014", longitude: "-73.99597274", spc_common: "Sophora"},
      {id: 1451, address: "319 WEST 13 STREET", latitude: "40.73951749", longitude: "-74.00396884", spc_common: "Japanese zelkova"},
      {id: 1488, address: "130 WEST 11 STREET", latitude: "40.73588436", longitude: "-73.9995854", spc_common: "ginkgo"},
      {id: 1608, address: "301 WEST 4 STREET", latitude: "40.73689499", longitude: "-74.00358611", spc_common: "Ohio buckeye"},
      {id: 1613, address: "473 AVENUE OF THE AMERICAS", latitude: "40.7357081", longitude: "-73.99817893", spc_common: "Sophora"},
      {id: 1629, address: "107 GREENWICH AVENUE", latitude: "40.73791181", longitude: "-74.00199676", spc_common: "Callery pear"},
      {id: 1680, address: "605 HUDSON STREET", latitude: "40.73722897", longitude: "-74.00564484", spc_common: "Sophora"},
      {id: 1746, address: "552 HUDSON STREET", latitude: "40.73520205", longitude: "-74.00582898", spc_common: ""},
      {id: 1791, address: "601 HUDSON STREET", latitude: "40.73712447", longitude: "-74.00566547", spc_common: "Sophora"},
      {id: 1990, address: "153 WEST HOUSTON STREET", latitude: "40.72813901", longitude: "-74.00239005", spc_common: "northern red oak"},
      {id: 2046, address: "73 WEST HOUSTON STREET", latitude: "40.72663958", longitude: "-73.99936836", spc_common: "willow oak"},
      {id: 2065, address: "138 WEST 11 STREET", latitude: "40.73599985", longitude: "-73.99985935", spc_common: "pin oak"},
      {id: 2379, address: "73 WEST HOUSTON STREET", latitude: "40.72666328", longitude: "-73.99941653", spc_common: "willow oak"},
      {id: 2407, address: "157 HESTER STREET", latitude: "40.71751014", longitude: "-73.99597274", spc_common: "Sophora"},
      {id: 2451, address: "319 WEST 13 STREET", latitude: "40.73951749", longitude: "-74.00396884", spc_common: "Japanese zelkova"},
      {id: 2488, address: "130 WEST 11 STREET", latitude: "40.73588436", longitude: "-73.9995854", spc_common: "ginkgo"},
      {id: 2608, address: "301 WEST 4 STREET", latitude: "40.73689499", longitude: "-74.00358611", spc_common: "Ohio buckeye"},
      {id: 2613, address: "473 AVENUE OF THE AMERICAS", latitude: "40.7357081", longitude: "-73.99817893", spc_common: "Sophora"},
      {id: 2629, address: "107 GREENWICH AVENUE", latitude: "40.73791181", longitude: "-74.00199676", spc_common: "Callery pear"},
      {id: 2680, address: "605 HUDSON STREET", latitude: "40.73722897", longitude: "-74.00564484", spc_common: "Sophora"},
      {id: 2746, address: "552 HUDSON STREET", latitude: "40.73520205", longitude: "-74.00582898", spc_common: ""},
      {id: 2791, address: "601 HUDSON STREET", latitude: "40.73712447", longitude: "-74.00566547", spc_common: "Sophora"},
      {id: 2990, address: "153 WEST HOUSTON STREET", latitude: "40.72813901", longitude: "-74.00239005", spc_common: "northern red oak"},
      {id: 3046, address: "73 WEST HOUSTON STREET", latitude: "40.72663958", longitude: "-73.99936836", spc_common: "willow oak"},
      {id: 3065, address: "138 WEST 11 STREET", latitude: "40.73599985", longitude: "-73.99985935", spc_common: "pin oak"},
      {id: 3379, address: "73 WEST HOUSTON STREET", latitude: "40.72666328", longitude: "-73.99941653", spc_common: "willow oak"},
      {id: 3407, address: "157 HESTER STREET", latitude: "40.71751014", longitude: "-73.99597274", spc_common: "Sophora"},
      {id: 3451, address: "319 WEST 13 STREET", latitude: "40.73951749", longitude: "-74.00396884", spc_common: "Japanese zelkova"},
      {id: 3488, address: "130 WEST 11 STREET", latitude: "40.73588436", longitude: "-73.9995854", spc_common: "ginkgo"},
      {id: 3608, address: "301 WEST 4 STREET", latitude: "40.73689499", longitude: "-74.00358611", spc_common: "Ohio buckeye"},
      {id: 3613, address: "473 AVENUE OF THE AMERICAS", latitude: "40.7357081", longitude: "-73.99817893", spc_common: "Sophora"},
      {id: 3629, address: "107 GREENWICH AVENUE", latitude: "40.73791181", longitude: "-74.00199676", spc_common: "Callery pear"},
      {id: 3680, address: "605 HUDSON STREET", latitude: "40.73722897", longitude: "-74.00564484", spc_common: "Sophora"},
      {id: 3746, address: "552 HUDSON STREET", latitude: "40.73520205", longitude: "-74.00582898", spc_common: ""},
      {id: 3791, address: "601 HUDSON STREET", latitude: "40.73712447", longitude: "-74.00566547", spc_common: "Sophora"},
      {id: 3990, address: "153 WEST HOUSTON STREET", latitude: "40.72813901", longitude: "-74.00239005", spc_common: "northern red oak"}],
      nearbyItems: [],
      latitude: 40.7263504,
      longitude: -74.0075765
    }
  }

  componentWillMount() {
    // this.requestSaveAllData();
  }
  
  componentDidMount() {
    // this.getTreeData();
  }

  findNearby() {
    var lat = this.state.latitude;
    var lon = this.state.longitude;
    var result = this.state.items.filter(item => {
      if ((Number(item.latitude) < lat + 0.0134000 && Number(item.latitude) > lat - 0.0134000) 
      && (Number(item.longitude) < lon + 0.0134000 && Number(item.longitude) > lon - 0.0134000)) {
        return item;
      }
    })
    this.setState({
      nearbyItems: result
    })
    console.log('Your coordinates: ' + lat + ' ' + lon);
    console.log('Located the following trees: ', this.state.items); // temporarily using data from this.state
  }

  requestSaveAllData() {
    axios.post('/items')
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.error(err);
    })
  }

  // Commented out for demo
  // getTreeData() {
  //   console.log('Locating trees');
  //   https.get('/items', (response) => {
  //     var data = '';
  //     response.on('data', (chunk) => {
  //       data += chunk;
  //     })
  //     response.on('end', () => {
  //       this.setState({
  //         items: JSON.parse(data)
  //       })
  //       this.findNearby();
  //     })
  //   }).on('error', (err) => {
  //     console.error('Error: ' + err.message);
  //   })
  // }

  onChangeLatitude(e) {
    this.setState({
      latitude: e.target.value
    });
  }

  onChangeLongitude(e) {
    this.setState({
      longitude: e.target.value
    });
  }

  render () {
    return (<div>
      <Location 
        locationInfo={[this.state.test_latitude, this.state.test_longitude]}
        latitudeX={this.state.latitude}
        longitudeY={this.state.longitude}
        onChangeLat={this.onChangeLatitude.bind(this)}
        onChangeLon={this.onChangeLongitude.bind(this)}
        onLocationSubmit={this.findNearby.bind(this)}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));