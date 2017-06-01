
'use strict';
var app = app || {};
(function(module){
  const aboutView = {}
  const ui = function(){
    let $about = $('.fa-address-book');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };
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

const setTeasers = () => {
  $('#list-events p').hide();
}

// function hideTag() {
//   $('.show-less').on('click', function(){
//     console.log('cant hide p tags');
//     $('#list-events p').hide();
//     $('#description').addClass('description');
//     $('#description').removeClass('show-less');
//   })
// }
