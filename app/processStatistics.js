exports.getStatistics = (req, res) => {

    console.log(req.body.start);
    const request = require("request");
    const url = "https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json";
    request.get(url, (error, response, body) => {
        if (error) {
            res.status(404).send({ message: 'Unable to find statistics data'});
        }
        if (!error && response.statusCode === 200) {
            jsonData = JSON.parse(body);
            let start = new Date( req.body.start );
            start.setMinutes(start.getMinutes() + start.getTimezoneOffset())
            console.log('date ' + start.toISOString() );
            if( start ){
                console.log('true');
            }
            let jsonRes = processStatistics(jsonData);
            if (jsonRes != null) {
                res.send(jsonRes);
            }
        }
    });

    function processStatistics(jsonObj) {
        var stats = {
            output: []
        };
        let webId = [];
        for (let myKey in jsonObj) {
            if (!webId.includes(jsonObj[myKey].websiteId)) {
                var data = {
                    websiteId: jsonObj[myKey].websiteId,
                    date: jsonObj[myKey].date,
                    chats: jsonObj[myKey].chats,
                    missedChats: jsonObj[myKey].missedChats
                };
                webId.push(jsonObj[myKey].websiteId);
                stats.output.push(data);
            } else {
                let dData = stats["output"].filter(
                    d => d.websiteId === jsonObj[myKey].websiteId
                );

                if (dData) {
                    let cMissedChats = dData[0].missedChats + jsonObj[myKey].missedChats;
                    let cChats = dData[0].chats + jsonObj[myKey].chats;
                    // console.log("running total " + cMissedChats);
                    dData[0].missedChats = cMissedChats;
                    dData[0].chats = cChats;
                }
            }
        }
        var json = JSON.stringify(stats, null, 4);
        return json;
    };
}
