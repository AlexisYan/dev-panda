'use strict';
var app = app || {};


page('/about', app.aboutController.index);

page('/map', app.eventController.index);
page();
