'use strict';

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.618347, lng: -122.351977},
          zoom: 12
        });
      }
