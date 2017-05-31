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
    let template = Handlebars.compile($('#eventlist-template').text());
    console.log('rendering events');
    return data.forEach(event => $('#list-events').append(template(event)));
  });
});
