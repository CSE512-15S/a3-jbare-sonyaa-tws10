
var justiceDataMap = {}; 

d3.json("justices.json", function(error, json) {
  if (error) return console.warn(error);
  for (i in json.justices) {
    var elem = json.justices[i];
    justiceDataMap[elem.id] = [elem.name, elem.link];
  }
});