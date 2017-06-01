

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
