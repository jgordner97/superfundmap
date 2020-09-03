var mymap = L.map('mapid').setView([37.8, -96], 4);
// mymap.setView(new L.LatLng(28.865013, -93.652605), 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamdvcmRuZXIiLCJhIjoiY2tkcnZ4dnUzMWpqZTJzbWhkZjV0eXd6eSJ9.N96GPILshErNFBYwyeEM1g'
}).addTo(mymap);
// L.esri.basemapLayer('Topographic').addTo(mymap);
var runLayer = omnivore.kml('Superfund_NPL_Site_Points_Wisconsin.kml')
    // .on('ready', function() {
    //     mymap.fitBounds(runLayer.getBounds());
    // })
    .addTo(mymap);

    //https://hub.arcgis.com/datasets/wi-dnr::superfund-npl-site-points/geoservice

    var runLayer = omnivore.kml('districts.kml')
    // .on('ready', function() {
    //     mymap.fitBounds(runLayer.getBounds());
    // })
    .addTo(mymap);
    var runLayer = omnivore.kml('MinnesotaRemediation.kml')
    // .on('ready', function() {
    //     mymap.fitBounds(runLayer.getBounds());
    // })
    .addTo(mymap);
    var runLayer = omnivore.kml('Layers.kml')
    // .on('ready', function() {
    //     mymap.fitBounds(runLayer.getBounds());
    // })
    .addTo(mymap);
    //https://hub.arcgis.com/datasets/mpca::sites-with-institutional-controls

    var runLayer = omnivore.kml('cali_sites.kml')
    // .on('ready', function() {
    //     mymap.fitBounds(runLayer.getBounds());
    // })
    .addTo(mymap);
    //https://www.google.com/maps/d/viewer?oe=UTF8&ie=UTF8&msa=0&mid=1GaMX746ZfjK4Zq9Iyh5n2qc6xeE&ll=38.34075774418084%2C-120.04820000000001&z=6
var floridaLayer = L.geoJSON(floridaSites, {
    onEachFeature: function(feature, layer){
        layer.bindPopup('<h2>'+feature.properties.Name + '</h2>')

    },
    filter: function(feature) {
        if(feature.properties.STATUS == "OPEN") {
            return true;
        } 
    }
}).addTo(mymap)
// L.geoJSON(floridaSites).addTo(mymap)

