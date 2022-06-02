//Create Map
var mymap = L.map('mapid', { center: [47.6062, -122.3321], zoom: 10 });
//Set Tiles

L.tileLayer.provider('CartoDB.Voyager').addTo(mymap);

//Setup Popups
function popUpGeoJson(feature, layer) {

    var popup = L.popup();
    popup.setContent(feature.properties.name + '<br>' + feature.properties.description);
    layer.bindPopup(popup);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });
    
};


function popUpGeoJson(feature, layer) {

    var popup = L.popup();
    popup.setContent(feature.properties.name + '<br>' + feature.properties.description);
    layer.bindPopup(popup);

    /*layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(mymap);
    });*/
    
};

//Create Lines and Polygons
var linkLayer = L.geoJSON(false, { onEachFeature: popUpGeoJson });
var burkeLayer = L.geoJSON(false, { onEachFeature: popUpGeoJson });
var gasworksLayer = L.geoJSON(false, { onEachFeature: popUpGeoJson });
var southLayer = L.geoJSON(false, { onEachFeature: popUpGeoJson });

//Load GeoJSON
$.getJSON("./data/link.geojson", function (data) { linkLayer.addData(data); });
$.getJSON("./data/burke.geojson", function (data) { burkeLayer.addData(data); });
$.getJSON("./data/gasworks.geojson", function (data) { gasworksLayer.addData(data); });
$.getJSON("./data/south.geojson", function (data) { southLayer.addData(data); });

//Create our Point Icons
//https://github.com/masajid390/BeautifyMarker

airportMarker = L.BeautifyIcon.icon({
    icon: "plane",
    iconShape: "marker"
})
trainStationMarker = L.BeautifyIcon.icon({
    icon: "train",
    iconShape: "marker"
})
poiMarker = L.BeautifyIcon.icon({
    icon: "hand-o-down",
    iconShape: "marker"
})
foodMarker = L.BeautifyIcon.icon({
    icon: "cutlery",
    iconShape: "marker"
})
foodMarker = L.BeautifyIcon.icon({
    icon: "graduation-cap",
    iconShape: "marker"
})
soccerMarker = L.BeautifyIcon.icon({
    icon: "futbol-o",
    iconShape: "marker"
})
buildingMarker = L.BeautifyIcon.icon({
    icon: "building-o",
    iconShape: "marker"
})
bikeMarker = L.BeautifyIcon.icon({
    icon: "bicycle",
    iconShape: "marker"
})


//Create Points
var airportLayer = L.marker([47.4502, -122.3088], { icon: airportMarker })
var airportStationLayer = L.marker([47.4450, -122.2970], { icon: trainStationMarker})
var idStationLayer = L.marker([47.5981, -122.3279], { icon: trainStationMarker})
var kingStLayer = L.marker([47.5984, -122.3299], { icon: poiMarker})
var soccerLayer = L.marker([47.5952, -122.3316], { icon: soccerMarker})
var pioneerSquareLayer = L.marker([47.6015, -122.3343], { icon: poiMarker})
var smithTowerLayer = L.marker([47.6019, -122.3319], { icon: buildingMarker})
var westlakeParkLayer = L.marker([47.6110, -122.3370], { icon: poiMarker})
var uStationLayer = L.marker([47.6598, -122.3139], { icon: trainStationMarker})
var theAveLayer = L.marker([47.6588, -122.3132], { icon: foodMarker})
var bikeRentalLayer = L.marker([47.6532, -122.3175], { icon: bikeMarker})

//bind popups for markers
//There's better ways of doing this, but this will have to do for now.
airportLayer.bindPopup("You'll most likely fly into this airport!")
airportStationLayer.bindPopup('This is the Airport light rail station. Board here to get to Seattle<br> <a href="https://youtu.be/Ulih7KNdoFE">Click here for direction!"</a>')
idStationLayer.bindPopup("Get off the train here to start exploring around Seattle")
kingStLayer.bindPopup("This is Seattle's currently active train station! Union St station is unfortunately closed forever")
soccerLayer.bindPopup("You might come here for a soccer or football match!")
pioneerSquareLayer.bindPopup("One of seattles oldest neighborhoods, this is where the city was founded.")
smithTowerLayer.bindPopup("Seattle's original skyscraper! Go to the top and have a drink at the bar")
westlakeParkLayer.bindPopup("Originally a street, this city plaza is a great place to take a breather or wait for a bus")
uStationLayer.bindPopup("Take the train to this street car suburb")
theAveLayer.bindPopup("While in the neighborhood, stop by this busy Avenue to grab a bite to eat.")
bikeRentalLayer.bindPopup("Go ride along the Burke Gilman trail and check out Gas Works park! This is a great place to rent a bike!")


//Animate Layers into Map
function animateLayers(snakeSpeed) {
    linkLayer.setStyle({ snakingSpeed: snakeSpeed })
    burkeLayer.setStyle({ snakingSpeed: snakeSpeed })
    gasworksLayer.setStyle({ snakingSpeed: snakeSpeed })
    southLayer.setStyle({ snakingSpeed: snakeSpeed })


    //Bring in the snakes!
    linkLayer.addTo(mymap).snakeIn();
    burkeLayer.addTo(mymap).snakeIn();
    gasworksLayer.addTo(mymap).snakeIn();
    southLayer.addTo(mymap).snakeIn();

    //Bombs incoming!
    airportLayer.addTo(mymap).bounce();
    airportStationLayer.addTo(mymap).bounce();
    idStationLayer.addTo(mymap).bounce();
    kingStLayer.addTo(mymap).bounce();
    soccerLayer.addTo(mymap).bounce();
    pioneerSquareLayer.addTo(mymap).bounce();
    smithTowerLayer.addTo(mymap).bounce();
    westlakeParkLayer.addTo(mymap).bounce();
    uStationLayer.addTo(mymap).bounce();
    theAveLayer.addTo(mymap).bounce();
    bikeRentalLayer.addTo(mymap).bounce();

}

//Run this when page is fully loaded
window.onload = (event) => {
    animateLayers(100);
};
