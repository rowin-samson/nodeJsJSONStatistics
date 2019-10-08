// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands


  
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require("request");
const hostname = '127.0.0.1';
const port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parser requests of content-type - application/jsons
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const processStatisticsController = require('./app/routes');
app.use('/get/statistics', processStatisticsController);
module.exports = app;
// var url = "https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json"
// let jsonObj = null;
// request.get(url, (error, response, body)   => {
//   if( error){
//     console.log("error ");
//   }
//   if(  !error  && response. statusCode  === 200 ){
//     // console.log(JSON.parse(body));
//      jsonObj = JSON.parse(body);
     
//     statictiscOne();
//   }
// });

// var statictiscOne = function processStatistics(){

//   var stats = {
//     output: []
//   };
//   let webId = [];
//   for(let myKey in jsonObj) {
//     if( !webId.includes(jsonObj[myKey].websiteId) ){
//       console.log('not existing ' + jsonObj[myKey].websiteId);
//         var data = {
//           websiteId: jsonObj[myKey].websiteId,
//           date: jsonObj[myKey].date,
//           chats: jsonObj[myKey].chats,
//           missedChats: jsonObj[myKey].missedChats
//         }
//         webId.push(jsonObj[myKey].websiteId);
//         stats.output.push(data);
//     }else{
      
//       let dData = stats['output'].filter( d => d.websiteId === jsonObj[myKey].websiteId );
      
//      if( dData ){
//        console.log( 'json ' + jsonObj[myKey].missedChats);
//        console.log( 'single ' + dData[0].missedChats );
//         let cMissedChats = dData[0].missedChats + jsonObj[myKey].missedChats; 
//         let cChats = dData[0].chats + jsonObj[myKey].chats;
//       // console.log("running total " + cMissedChats);
//         dData[0].missedChats = cMissedChats;
//         dData[0].chats = cChats;
//      }
       
//     }
      
//  }
//  var json = JSON.stringify(stats, null, 4);
//       console.log(json);
// }


 
