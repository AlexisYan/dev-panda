'use strict';

let map, latLon;
const SEATTLE = {lat: 47.618347, lng: -122.351977};

function initMap(latLon = SEATTLE) {
  map = new google.maps.Map(document.getElementById('map'), {
    center:latLon ,
    zoom: 12
  });
}

navigator.geolocation.getCurrentPosition(position =>
  latLon = [position.coords.latitude, position.coords.longitude])

$(() => {

  $('#find-meetups').on('click', () => {
    $.ajax({
      url: '/venues/meetup',
      method: 'post',
      data: { latLon }
    })
    .then(data => {
      console.log('meetup.com data:', data);
      let template = Handlebars.compile($('#eventlist-template').text());
      console.log('rendering events');
      data.forEach(event => {
        $('#list-events').append(template(event));
        let marker = new google.maps.Marker({
          position:{lat: event.group.lat, lng: event.group.lon},
          map,
          title: 'Marker'
        });
        let infoWindow = new google.maps.InfoWindow({
          content: `${event.description}`
        });
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
      });
    });
  });
});
