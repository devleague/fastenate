$.ajax({
  method: 'GET',
  url: '/api/my_boards.json',
  dataType: 'json'
})
.done(function(jsonData) {
  display(jsonData);
})
.fail(function() {
  //Handle errors
  handleError();
})
.always(function() {
  //Always update the UI with status
});

function display(obj) {
  var posts = obj.data.children;

  var $mainContent = $('#main-content');
  for (var i = 0; i < posts.length; i++) {
    //create div element for each post
    var $eachPost = $('<div />').addClass('post');
    $mainContent.append($eachPost);

    //create image div inside each post
    var $postImage = $('<div />').addClass('image');
    $eachPost.append($postImage);
    var thumbnail = posts[i].data.url;
    var $imgElem = $('<img />');
    $imgElem.attr('src', thumbnail);
    $postImage.append($imgElem);
    $imgElem.on('error', function() {
      $(this).attr( 'src', 'http://media04.hongkiat.com/thumbs/640x410/reddit-communities-to-love.jpg');
    });

    //create text div for all text content
    var $postText = $('<div />').addClass('text');
    $eachPost.append($postText);

    //title
    var title = posts[i].data.title;
    if (title.length > 66){
      title = title.substring(0, 65) + '...';
    }
    var $titleElem = $('<p />').addClass('title');
    $titleElem.append(title);
    $postText.append($titleElem);

    //author, date, and views
    var author = posts[i].data.author;
    var date = posts[i].data.created;
    var views =  posts[i].data.score;
    var $statsElem = $('<p />').addClass('stats');
    $statsElem.text('by ' + author + ' • ' + moment.unix(date).fromNow() + ' • ' + views + ' views');
    $postText.append($statsElem);

    //summary
    var $summaryElem = $('<p />').addClass('summary');
    $summaryElem.text('Croissant sugar plum sesame snaps cake pastry. Tootsie roll brownie gummies cupcake jelly-o gingerbread. Marshmallow fruitcake oat cake brownie croissant.');
    $postText.append($summaryElem);
  }
}

$('#random').click(function() {
  $('#main-content').html('');

  $.ajax({
    method: 'GET',
    url: '/api/random.json',
    dataType: 'json'
  })
  .done(function(jsonData) {
    display(jsonData);
  })
  .fail(function() {
    //Handle errors
    handleError();
  })
  .always(function() {
    //Always update the UI with status
  });
});

$('#get-app').click(function() {
  $('#main-content').html('');

  $.ajax({
    method: 'GET',
    url: '/api/get_the_app.json',
    dataType: 'json'
  })
  .done(function(jsonData) {
    display(jsonData);
  })
  .fail(function() {
    //Handle errors
    handleError();
  })
  .always(function() {
    //Always update the UI with status
  });
});