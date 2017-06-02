'use strict';

function setTeasers() {
  $('#list-events p').hide();
  $('.description').on('click', function(e) {
    $(this.parentNode.childNodes).fadeIn(150)
    $(this).text('Show Less -');
    $(this).addClass('show-less');
    $(this).removeClass('description');
    hideDescription();
  });
};

function hideDescription() {
  $('.show-less').off().on('click', function(e) {
    $(this).siblings().hide()
    $(this).text('Description ->');
    $(this).addClass('description');
    $(this).removeClass('show-less');
    setTeasers();
  });
};

function deleteEvents() {
  $('.delete-button').on('click',function(e) {
    $(this.parentNode).fadeOut(150)
    const eventId = typeof $(this).data('id') === 'number' ? $(this).data('id').toString() : $(this).data('id');
    eventData = eventData.filter(event => event.id !== eventId);
    mapMarkers.forEach(marker => marker.setMap(null));
    mapMarkers = [];
    eventData.forEach(event => appendMapMarker(event));
  });
}

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