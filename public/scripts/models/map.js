'use strict';
let map;
  function initMap(latLon = {lat: 47.618347, lng: -122.351977}) {
    map = new google.maps.Map(document.getElementById('map'), {
      center:latLon ,
      zoom: 12
    });
  }




    /*data.forEach(venue => {
      new google.maps.Marker({
        position:{ lat: latLon[0], lon:latLon[1] },
        map: new google.maps.Map(document.getElementById('map'), {
          center:{ lat:latLon[0], lon:latLon[1] },
          zoom: 12
        }),
        title: 'Marker'
      })
    })*/
