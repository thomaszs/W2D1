var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getAndPrintHTML(options, callback) {
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

function printHTML(html) {
  console.log(html);
}

getAndPrintHTML(requestOptions,printHTML);