$( document ).ready(function() {
  console.log("ready!");
  var searchKeyword = function(keyword) {
    var url = 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27news%27&Query=%27'+ encodeURI(keyword) + '%27&$format=json';
    $.ajax({
      dataType: 'json',
      url: url,
      headers : {
        'Authorization': 'Basic Ok1IckdZMENJM3ZFeWdUSFFJZEIxb2xIT3BKNnZ0L3pUU21jeFFKSkxPV2s='
      },
      type: 'GET'
    }).done(function(response) {
      for(var i = 0; i < 5; i++) {
        $('.articles').append("<div><h1><a href='" + response.d.results[0].News[i].Url + "'>" + response.d.results[0].News[i].Title + "</a></h1></div>");
      }
    }).fail(function() {
      console.log('failed!');
    });
  };

  $('.topic').on('click', function() {
    console.log("clicked!");
    searchKeyword($(this).text());
  });
});
