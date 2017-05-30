'use strict';

navigator.geolocation.getCurrentPosition(position => {
  const meetup = [];
  const eventbrite =[];
  const latLon = [position.coords.latitude, position.coords.longitude]
  $.ajax({
    url: '/venues/meetup',
    method: 'post',
    data: {latLon}
  })
  .then(data => meetup = data)
  .then(
    $.ajax({
    url: '/venues/eventbrite',
    method: 'post',
    data: latLon
  )
  .then(data => eventbrite = data)
})
