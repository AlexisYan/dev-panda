'use strict';
var app = app || {};
(function(module){

let map, latLon;
let mapMarkers = [];
let eventData = [];
const SEATTLE = {lat: 47.618347, lng: -122.351977};

function initMap(latLon = SEATTLE) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: latLon,
    zoom: 12
  });
}

navigator.geolocation.getCurrentPosition(position =>
  latLon = [position.coords.latitude, position.coords.longitude])

const fetchMeetupData = callback => {
  $('#find-meetups').on('click', () =>
    $.ajax({
      url: '/venues/meetup',
      method: 'post',
      data: { latLon }
    }).then(callback));
}

const template = Handlebars.compile($('#eventlist-template').text());

const appendMapMarker = event => {
  let marker = new google.maps.Marker({
    position:{lat: event.group.lat, lng: event.group.lon},
    map,
    title: 'marker',
    icon: { url: 'icons/panda.svg' }
  });
  let infoWindow = new google.maps.InfoWindow({
    content: `${event.description}`
  });
  marker.addListener('click', () => infoWindow.open(map, marker));
  mapMarkers.push(marker);
}

const renderMapData = data => {
  $('#icons').show();
  $('#find-meetups').hide();
  $('#map').show();
  initMap();
  data.forEach(event => {
    event.time = new Date(event.time)
    eventData.push(event);
    $('#list-events').append(template(event));
    appendMapMarker(event);
  });
  app.eventView.setTeasers();
  app.eventView.deleteEvents();
};

  $(() => fetchMeetupData(renderMapData));
})(app);
