var feed = document.getElementById('feed');

window.onload = function() {
  loadMyBoards();
};

function loadMyBoards() {
  clearFeed();
  $.getJSON(
    '/api/my_boards.json',
    function foo(data) {
      var post = data.data.children;

      for (var i = 0; i <= post.length; i++) {
        if (i % 2 === 0) {
          makeRow(post, i)
        }
      }
    }
  )
}

function loadRandom() {
  clearFeed();
  $.getJSON(
    '/api/random.json',
    function foo(data) {
      var post = data.data.children;

      for (var i = 0; i <= post.length; i++) {
        if (i % 2 === 0) {
          makeRow(post, i)
        }
      }
    }
  )
}

function loadGetTheApp() {
  clearFeed();
  $.getJSON(
    '/api/get_the_app.json',
    function foo(data) {
      var post = data.data.children;

      for (var i = 0; i <= post.length; i++) {
        if (i % 2 === 0) {
          makeRow(post, i)
        }
      }
    }
  )
}

function clearFeed() {
  while (feed.firstChild) {
    feed.removeChild(feed.firstChild);
  }
}

function makeRow(post, i) {
  var row = document.createElement('div');
  row.setAttribute(null, 'data-equalizer');
  row.className = 'row';
  row.id = 'row' + i;

  //row = "data-equalizer";
  feed.appendChild(row);

  var post1 = makePost(post[i], i);
  row.appendChild(post1);

  var post2 = makePost(post[i + 1], i);
  row.appendChild(post2);
}

function makePost(post, i) {
  var post1 = document.createElement('div');
  post1.className = 'post small-12 small-centered medium-6 medium-uncentered large-6 columns';
  post1.id = 'post' + i;

  var panel = document.createElement('div');
  panel.className = 'panel';
  post1.appendChild(panel);

  var image = document.createElement('img');
  image.src = post.data.url;
  panel.appendChild(image);

  var title = document.createElement('h2');
  title.innerHTML = post.data.title;
  panel.appendChild(title);

  var desc = document.createElement('p');
  var isoDate = new Date(post.data.created).toISOString();
  desc.style.color = 'grey';
  desc.innerHTML = '</br> by ' + post.data.author + ' &middot;' + isoDate + ' &middot; ' + post.data.score  ;
  panel.appendChild(desc);

  return post1;
}