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
    console.log('show',this.parentNode.childNodes);
    $(this.parentNode.childNodes).fadeIn(150)
    $(this).text('Show Less -');
    $(this).addClass('show-less');
    $(this).removeClass('description');
    hideDescription();
  });
};

eventView.hideDescription = function() {
  $('.show-less').off().on('click', function(e) {
    console.log(e.target, 'hide', this.siblings);
    $(this).siblings().hide()
    $(this).text('Description ->');
    $(this).addClass('description');
    $(this).removeClass('show-less');
    setTeasers();
  });
};

eventView.deleteEvents = function() {
  $('.delete-button').on('click',function(e) {
    $(this.parentNode.childNodes).fadeOut(150)
    const eventId = typeof $(this).data('id') === 'number' ? $(this).data('id').toString() : $(this).data('id');
    eventData = eventData.filter(event => event.id !== eventId);
    mapMarkers.forEach(marker => marker.setMap(null));
    mapMarkers = [];
    eventData.forEach(event => appendMapMarker(event));
  });
}
<<<<<<< Updated upstream

$(() => $('#find-meetups').on('click', () => $('#landing').hide()));
=======
module.eventView = eventView;
})(app);
>>>>>>> Stashed changes
