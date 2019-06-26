var https = require('https');

var getTreeData = function(callback) {
  https.get('https://data.cityofnewyork.us/resource/uvpi-gqnh.json', (response) => {
    var data = '';
  
    response.on('data', (chunk) => {
      data += chunk;
    })
  
    response.on('end', () => {
      callback(null, JSON.parse(data));
    })
  
  }).on('error', (err) => {
    console.err('Error:' + err.message);
    callback(err);
  })
}

module.exports = getTreeData;