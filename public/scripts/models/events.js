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
    let dateTemplate = Handlebars.compile($('#date-template').text());
    data = data.map(function(event){
      event.time = new Date(event.time)
      return event
    })
    console.log('rendering events');
    return data.forEach(event => $('#list-events').append(template(event)));
  });
});
