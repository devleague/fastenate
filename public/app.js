//use ajax to pull data via json
//json is so don't have to refresh each time
//simmilar to Uber exercise, grab data which is posted to html dynamically
//make sure to link up jquery and app.js
/*tutorial link on ajax using jquery
https://www.youtube.com/watch?v=j-S5MBs4y0Q*/

// $("#random").click(function () {
//   $.ajax("/api/random.json", {
//   contentType: "application/json",
//   success: getData
//   });
// });

// $(function getData (data){
//     console.log(data);
//     console.log('hello');
//   $(".containter").append("<p>" + data + "</p>");
// });

$(function () {
  $.ajax('api/my_boards.json', {
    success: getApp
  });
});

function getApp (boards){
  var $mainDiv = $('.mainContainer');
  var $myBoards = $('.myBoards');
  // var $title = $('<h2 />');
  //traversing the my_boards.json
  //looked at how json file is setup, .data.children etc.
  boards.data.children.forEach(function (board){
    $myBoards.addClass('inContainer');
    var srcPath = board.data.thumbnail;
    // $title.text('Reload myBoards');


    var $listTitle = $('<li />').text(board.data.title);
    var $img = $('<img src =' + srcPath +'/>');

    $myBoards.append($listTitle);
    $myBoards.append($img);
  });
  $mainDiv.append($myBoards);
}
