'use strict';
<<<<<<< Updated upstream

function setTeasers() {
=======
var app = app || {};
(function(module){
const eventView = {};
eventView.setTeasers = function() {
  console.log($('#list-events p'));
>>>>>>> Stashed changes
  $('#list-events p').hide();
  $('.description').on('click', function(e) {
    $(this.parentNode.childNodes).fadeIn(150)
    $(this).text('Show Less -');
    $(this).addClass('show-less');
    $(this).removeClass('description');
    hideDescription();
  });
};

eventView.hideDescription = function() {
  $('.show-less').off().on('click', function(e) {
    $(this).siblings().hide()
    $(this).text('Description ->');
    $(this).addClass('description');
    $(this).removeClass('show-less');
    setTeasers();
  });
};

eventView.deleteEvents = function() {
  $('.delete-button').on('click',function(e) {
    $(this.parentNode).fadeOut(150)
    const eventId = typeof $(this).data('id') === 'number' ? $(this).data('id').toString() : $(this).data('id');
    eventData = eventData.filter(event => event.id !== eventId);
    mapMarkers.forEach(marker => marker.setMap(null));
    mapMarkers = [];
    eventData.forEach(event => appendMapMarker(event));
  });
}
<<<<<<< Updated upstream

<<<<<<< HEAD:public/scripts/views/eventView.js
$(() => $('#find-meetups').on('click', () => $('#landing').hide()));
=======
module.eventView = eventView;
})(app);
>>>>>>> Stashed changes
=======
$(() => {
  $('#find-meetups').on('click', () => {
    $('#landing').hide();
    $('.main').show();
    $('#icons').show();
  });
  $('.map-tab').on('click', () => {
    $('#landing').hide();
    $('.main').show();
  });
  $('.about-tab').on('click', function(e){
    e.preventDefault();
    $('.main').hide();
    $('#about-page').fadeIn('slow');
  });
});
>>>>>>> 6bf503204dc3a61c472be4d973b29a871420f56f:public/scripts/views.js
