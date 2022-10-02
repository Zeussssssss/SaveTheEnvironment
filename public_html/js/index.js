let map;
let lati = 44.97;
let long = -103.77;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // This describes the location of the map by lat and long
    center: { lat: lati, lng: long },
    zoom: 8,
  });
}

console.log("e");
window.initMap = initMap();

var heatMapData = [
  { location: new google.maps.LatLng(37.782, -122.447), weight: 0.5 },
  new google.maps.LatLng(37.782, -122.445),
  { location: new google.maps.LatLng(37.782, -122.443), weight: 2 },
  { location: new google.maps.LatLng(37.782, -122.441), weight: 3 },
  { location: new google.maps.LatLng(37.782, -122.439), weight: 2 },
  new google.maps.LatLng(37.782, -122.437),
  { location: new google.maps.LatLng(37.782, -122.435), weight: 0.5 },

  { location: new google.maps.LatLng(37.785, -122.447), weight: 3 },
  { location: new google.maps.LatLng(37.785, -122.445), weight: 2 },
  new google.maps.LatLng(37.785, -122.443),
  { location: new google.maps.LatLng(37.785, -122.441), weight: 0.5 },
  new google.maps.LatLng(37.785, -122.439),
  { location: new google.maps.LatLng(37.785, -122.437), weight: 2 },
  { location: new google.maps.LatLng(37.785, -122.435), weight: 3 },
];

var US = new google.maps.LatLng(lati, long);

map = new google.maps.Map(document.getElementById("map"), {
  center: US,
  zoom: 13,
  mapTypeId: "satellite",
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData,
});
heatmap.setMap(map);
