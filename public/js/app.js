$(function () {
  $.ajax('/api/get_the_app.json', {
    contentType: 'application/json',
    success: getApp
  });
});

function getApp () {
  console.log('Connecting to API');
}