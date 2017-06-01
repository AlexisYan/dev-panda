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
