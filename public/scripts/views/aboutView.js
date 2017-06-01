'use strict';
var app = app || {};

(function(module){
  const aboutView = {};
  aboutView.aboutPage = function(){
    $('#about-tab').on('click', function(e){
      e.preventDefault();
      $('#map').hide();
      $('.tab').hide();
      $('#aboutPage').show();
      $('#head').hide();
    });
  };
  aboutView.aboutPage();
  module.aboutView = aboutView;
})(app);
// function setTeasers() {
//   console.log($('#list-events p'));
//   $('#list-events p').hide();
//   $('.description').on('click', function() {
//     console.log('clicked description');
//     $('.description').text('Show Less -');
//     $('#list-events p').show();
//     $('#description').addClass('show-less');
//     $('#description').removeClass('description');
//   });
// };
