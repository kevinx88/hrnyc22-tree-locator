var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'new_password',
  database : 'trees'
});

connection.connect(function(err) {
  if (err) {
    console.error("Error: " + err.message);
    return;
  } else {
    console.log('Established mysql connection');
  }
})

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, result, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

var saveAll = function(data) {
  var items = data.map(tree => {
    var attributes = [];
    attributes.push(tree.address, tree.latitude, tree.longitude, 
      tree.spc_common, tree.zip_city, tree.zipcode);
    return attributes;
  });

  var query = `INSERT IGNORE INTO items (address, latitude, longitude, spc_common, zip_city, zipcode) VALUES ?`;
  connection.query(query, [items], function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully saved data');
    }
  });
}

module.exports.selectAll = selectAll;
module.exports.saveAll = saveAll;
