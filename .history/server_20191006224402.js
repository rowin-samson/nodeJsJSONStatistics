const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var request = require("request")

var url = "https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json"
let jsonObj = null;
request.get(url, (error, response, body)   => {
  if( error){
    console.log("error ");
  }
  if(  !error  && response. statusCode  === 200 ){
    // console.log(JSON.parse(body));
     jsonObj = JSON.parse(body);
     
    statictiscOne();
  }
});

var statictiscOne = function processStatistics(){
  // Object.keys(jsonObj).forEach(key => {
  //   console.log(jsonObj[key]);
  // });

  for(var myKey in jsonObj) {
    // console.log("key:"+myKey+", value:"+jsonObj[myKey].websiteId);
    // console.log(groupBy(jsonObj[myKey].websiteId,  jsonObj[myKey]));
     
 }
 groupBy('websiteId'. jsonObj); 
}

function groupBy(key, jsonObj) {
  console.log(array);
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var added = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j][key] == array[i][key]) {
        result[j].items.push(array[i]);
        added = true;
        break;
      }
    }
    if (!added) {
      var entry = {items: []};
      entry[key] = array[i][key];
      entry.items.push(array[i]);
      result.push(entry);
    }
  }
  console.log(result);
  return result;
}



