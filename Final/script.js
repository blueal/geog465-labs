//Create Map
var mymap = L.map('mapid', { center: [47.6062, -122.3321], zoom: 10 });
//Set Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//Create Layers
var linkLayer = L.geoJSON(false, { style: "blue" });
var burkeLayer = L.geoJSON(false, { style: "green" });
var gasworksLayer = L.geoJSON(false, { style: "brown" });
var southLayer = L.geoJSON(false, { style: "yellow" });

//Load GeoJSON
$.getJSON("./link.geojson", function (data) { linkLayer.addData(data); });
$.getJSON("./burke.geojson", function (data) { burkeLayer.addData(data); });
$.getJSON("./gasworks.geojson", function (data) { gasworksLayer.addData(data); });
$.getJSON("./south.geojson", function (data) { southLayer.addData(data); });

//Add Layers to map
linkLayer.addTo(mymap);
burkeLayer.addTo(mymap);
gasworksLayer.addTo(mymap);
southLayer.addTo(mymap);
