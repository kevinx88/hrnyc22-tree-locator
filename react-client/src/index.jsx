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
      items: [],
      nearbyItems: [],
      latitude: 40.7263504,
      longitude: -74.0075765
    }
  }

  componentWillMount() {
    this.requestSaveAllData();
  }
  
  componentDidMount() {
    this.getTreeData();
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
    console.log('Found trees: ', this.state.nearbyItems);
  }

  findNearbyBound = this.findNearby.bind(this);

  getTreeData() {
    console.log('Locating trees');
    https.get('/items', (response) => {
      var data = '';
      response.on('data', (chunk) => {
        data += chunk;
      })
      response.on('end', () => {
        this.setState({
          items: JSON.parse(data)
        })
        findNearbyBound();
      })
    }).on('error', (err) => {
      console.error('Error: ' + err.message);
    })
  }

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
        onLocationSubmit={this.getTreeData.bind(this)}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));