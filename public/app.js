//use ajax to pull data via json
//json is so don't have to refresh each time
//simmilar to Uber exercise, grab data which is posted to html dynamically
//make sure to link up jquery and app.js
/*tutorial link on ajax using jquery
https://www.youtube.com/watch?v=j-S5MBs4y0Q*/

//TODOs: 1. add click function
//       2. center items
//       3. apply to each board, and make pretty
//       4. how to make ajax more dry with boards? Areas that are changing, make into a var
//       5. had to rename the success getApp function since was overriding



$(function () {
  $('#clickRandom').click(function(){
    console.log("in getRandom function");
    $.ajax('api/random.json', {
    success: getRandom
    });
  });
});

function getRandom (boards){
  var $titleOne = $('<h2>' + 'Be Yourself .. Be Random' + '</h2>');
  var $mainDiv = $('.mainContainer');
  var $random = $('.random');

  $random.append($titleOne);
  //traversing the my_boards.json
  //looked at how json file is setup, .data.children etc.
  boards.data.children.forEach(function (board){
    var srcPath = board.data.thumbnail;
    var $listTitle = $('<li />').text(board.data.title);
    var $img = $('<img src =' + srcPath +'>');

    $random.addClass('inContainer');
    $img.addClass('image');
    $random.append($listTitle);
    $random.append($img);
  });
  $mainDiv.append($random);
}

$(function () {
  $('#clickMyBoards').click(function(){
    console.log("in getBoards function");
    $.ajax('api/my_boards.json', {
      success: getBoards
    });
  });
});

function getBoards (boards){
  var $titleTwo = $('<h2>' + 'Reload myBoards' + '</h2>');
  var $mainDiv = $('.mainContainer');
  var $myBoards = $('.myBoards');

  $myBoards.append($titleTwo);

  boards.data.children.forEach(function (board){
    var srcPath = board.data.thumbnail;
    var $listTitle = $('<li />').text(board.data.title);
    var $img = $('<img src =' + srcPath +'>');

    $myBoards.addClass('inContainer');
    $img.addClass('image');
    $myBoards.append($listTitle);
    $myBoards.append($img);
  });
  $mainDiv.append($myBoards);
}

$(function () {
  $('#clickGetApp').click(function(){
    console.log("in getApp function");
    $.ajax('api/get_the_app.json', {
      success: getApp
    });
  });
});

function getApp (boards){
  var $titleTwo = $('<h2>' + 'Me App es su App' + '</h2>');
  var $mainDiv = $('.mainContainer');
  var $myApp = $('.myApp');

  $myApp.append($titleTwo);

  boards.data.children.forEach(function (board){
    var srcPath = board.data.thumbnail;
    var $listTitle = $('<li />').text(board.data.title);
    var $img = $('<img src =' + srcPath +'>');

    $myApp.addClass('inContainer');
    $img.addClass('image');
    $myApp.append($listTitle);
    $myApp.append($img);
  });
  $mainDiv.append($myApp);
}

