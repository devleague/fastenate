//use ajax to pull data via json
//json is so don't have to refresh each time
//simmilar to Uber exercise, grab data which is posted to html dynamically
//make sure to link up jquery and app.js

$(function(){
  $.ajax('/api/get_the_app.json', {
    contentType: 'application/json',
    error: function(err){
      console.error(err);
    },
    success: post

  });
});

function post (posts){
  console.log(posts);
  var $div = $('div');

}