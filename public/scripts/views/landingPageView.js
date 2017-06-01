'use strict';

var app = app || {};

(function(module){

  const landingView = {}

  landingView.landingPage = function(){
    $('#aboutPage').hide();
    $('#map').hide();
  };

  landingView.landingPage();
  module.landingView = landingView;
})(app);
