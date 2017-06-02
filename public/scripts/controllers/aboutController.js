'use strict';
var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('.fa-address-book').show().siblings().hide();

    app.aboutView.aboutPage();
  };
  module.aboutController = aboutController;
})(app);
