exports.ifttt = function(event, context){
  var request = require('request');
  request.post(process.env.IFTTT_KEY, function(err, res, body){
    if(err) throw err;
    console.log("Sent ping to IFTTT!");
  })
}