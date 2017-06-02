'use strict';
var app = app || {};

(function(module){
  const aboutView = {};
  aboutView.aboutPage = function(){
    $('#about-tab').on('click', function(e){
      e.preventDefault();
      $('#find-meetups').hide();
      $('.tab').hide();
      $('#aboutPage').fadeIn('slow');
      $('#head').hide();
    });
  };
  aboutView.aboutPage();
  module.aboutView = aboutView;
})(app);
