'use strict';

function setTeasers() {
  console.log($('#list-events p'));
  $('#list-events p').hide();
  $('.description').on('click', function(e) {
    $(this.parentNode.parentNode.childNodes).show()
    $(this).text('Show Less -');
    $('#description').addClass('show-less');
    $('#description').removeClass('description');
  });
};

function deleteEvents() {
  $('.delete-button').on('click',function(e) {
    console.log(this.parentNode.childNodes);
    $(this.parentNode.childNodes).fadeOut(150)
})
}
