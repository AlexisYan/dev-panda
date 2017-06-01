'use strict';

function setTeasers() {
  console.log($('#list-events p'));
  $('#list-events p').hide();
  $('.description').on('click', function() {
    console.log('clicked description');
    $('.description').text('Show Less -');
    $('#list-events p').show();
    $('#description').addClass('show-less');
    $('#description').removeClass('description');
  });
};

function deleteEvents() {
  console.log('delete is running');
  $('.delete-button').on('click',function(e) {
    $(this).fadeOut(150)
})
}
