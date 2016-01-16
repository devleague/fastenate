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



function post (){
  var $nav = $('<nav />');

  $.getJSON('/api/get_the_app.json', function (data){
    $(nav).atrr('/get-app').click(function (events){
      $.each(data).appendTo(".block-four");
    });
  });
}