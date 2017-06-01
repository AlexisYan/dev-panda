'use strict';

(function(module){
  const commentView = {};

  commentView.initNewArticlePage = function() {
    $('.tab-content').show();
    // $('#article-json').on('focus', function() {
    //   $(this).select();
    // });
    $('#new-form').on('submit', commentView.submit);
  };


  commentView.submit = function(event) {
    event.preventDefault();
    let comment = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      body: $('#article-body').val()
    });
    $('#articles').append(comment.toHtml('#article-template'));
  };

  commentView.initNewArticlePage();
  module.commentView = commentView;
})(app);
