var getHTML = require('./http-functions');

function reverse(html) {
  console.log(html.split("").reverse().join(""));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};
getHTML(requestOptions,reverse);