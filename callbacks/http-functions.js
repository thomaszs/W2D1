var https = require('https');

module.exports = function getHTML(options, callback) {
  var buffered = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      buffered += data;
    });
    response.on('end', function () {
      console.log('Response stream complete.');
      callback(buffered)
    });
  })
}
