$.getJSON(
        "http://www.reddit.com/r/awww.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
                console.log(post.data.title);
              $("#reddit-content").append( '<br>' + post.data.title );
              $("#reddit-content").append( '<br> <img style="float:right;" src="' + post.data.url + '">' );
              $("#reddit-content").append( '<br>' + post.data.permalink );
              $("#reddit-content").append( '<br>' + post.data.ups );
              $("#reddit-content").append( '<br>' + post.data.downs );
              $("#reddit-content").append( '<hr>' );
            }
          )
        }
      )
      // .success(function() { alert("second success"); })
    .error(function() { alert("error"); })
      // .complete(function() { alert("complete"); });