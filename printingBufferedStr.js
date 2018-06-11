var https = require('https');
var buffered = "";

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          buffered += data;
            console.log(buffered)
        });
        response.on('end', function() {
          console.log('Response stream complete.');
        });
      });
      }
      getAndPrintHTML();