'use strict';
var app = app || {};
(function(module){
  const eventController = {};
  eventController.index = () => {
    app.eventView.setTeasers();
    app.eventView.deleteEvents();
  };
  module.eventController = eventController;
})(app);
