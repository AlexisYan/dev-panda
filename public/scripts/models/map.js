'use strict';

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.618347, lng: -122.351977},
      zoom: 12
    });
  }

navigator.mapLocation.getCurrentEvents(position => {
  const latLon = [position.coords.latitude, position.coords.longitude]
  $.ajax({
    url: '/venues/googlemaps',
    method: 'post',
    data: { latLon }
  }).then(data => {
    console.log('maps.googleapis.com data', data);});
});
