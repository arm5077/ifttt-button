exports.handler = function(event, context){
  var request = require('request');
  request.post("https://maker.ifttt.com/trigger/santana-button-pressed/with/key/{{YOUR KEY HERE}}", function(err, res, body){
    if(err) throw err;
    console.log("Sent ping to IFTTT!");
  })
}