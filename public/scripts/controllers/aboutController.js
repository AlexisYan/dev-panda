'use strict';
var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('.fa-address-book').show().siblings().hide();

    app.ui();
  };
  module.aboutController = aboutController;
})(app);
