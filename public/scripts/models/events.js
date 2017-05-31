'use strict';

navigator.geolocation.getCurrentPosition(position => {
  const latLon = [position.coords.latitude, position.coords.longitude]
  $.ajax({
    url: '/venues/meetup',
    method: 'post',

    data: { latLon }
  })
  .then(data => {
    console.log('meetup.com data:', data);
    $.ajax({
      url: '/venues/eventbrite',
      method: 'post',
      data: { latLon }
    })
    .then(data => {
      console.log('eventbrite.com data:', data)
    });
  });
});
