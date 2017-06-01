'use strict';
let map;
  function initMap(latLon = {lat: 47.618347, lng: -122.351977}) {
    map = new google.maps.Map(document.getElementById('map'), {
      center:latLon ,
      zoom: 12
    });
  }

navigator.geolocation.getCurrentPosition(position => {
  const latLon = [position.coords.latitude, position.coords.longitude]
  $.ajax({
    url: '/venues/meetup',
    method: 'post',
    data: { latLon }
  })
  .then(data => {
    console.log('meetup.com data:', data);
    let template = Handlebars.compile($('#eventlist-template').text());
    let dateTemplate = Handlebars.compile($('#date-template').text());
    data = data.map(function(event){
      event.time = new Date(event.time)
      return event
    })
    console.log('rendering events');
    data.forEach(event => {
      $('#list-events').append(template(event));

        new google.maps.Marker({
        position:{lat: event.group.lat, lng: event.group.lon},
        map: map,
        title: 'Marker'
      })
    })
    setTeasers();
  });
});
