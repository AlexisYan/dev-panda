'use strict';
var app = app || {};

(function(module) {
  function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    let template = Handlebars.compile($('#article-template').text());
    // this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = rows => {
    Article.all = rows.map(ele => new Article(ele));
  };

  Article.fetchAll = function(){
    Article.loadAll();
  }
  module.Article = Article;
})(app);
