'use strict';

function setTeasers() {
  console.log($('#list-events p'));
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
function hideDescription() {
  $('.show-less').off().on('click', function(e) {
    console.log(e.target, 'hide', this.siblings);
    $(this).siblings().hide()
    $(this).text('Description ->');
    $(this).addClass('description');
    $(this).removeClass('show-less');
    setTeasers();
  });
};

function deleteEvents() {
  $('.delete-button').on('click',function(e) {
    console.log(this.parentNode.childNodes);
    $(this.parentNode.childNodes).fadeOut(150)
})
}
