'use strict';

navigator.geolocation.getCurrentPosition(position => {
  const meetup = [];
  const eventbrite =[];
  const latLon = [position.coords.latitude, position.coords.longitude]
  console.log('pre-ajax1')
  $.ajax({
    url: '/venues/meetup',
    method: 'post',
    data: { latLon }
  })
  .then(data => {
    console.log('meetup data', data)
    meetup = data
  })
  .then(
    $.ajax({
    url: '/venues/eventbrite',
    method: 'post',
    data: { latLon }
  }))
  .then(data => {
    console.log('data', data)
    eventbrite = data
  })
})
