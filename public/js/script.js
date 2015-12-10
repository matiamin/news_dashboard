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
      //Empties the articles div after a successful api call.
      $('.articles').empty();
      for(var i = 0; i < 5; i++) {
        $('.articles').append("<div><h4><a href='" + response.d.results[0].News[i].Url + "'>" + response.d.results[0].News[i].Title + "</a></h4><p>News Source: " + response.d.results[0].News[i].Source + "</p><p>" + response.d.results[0].News[i].Date + "</p><p>" + response.d.results[0].News[i].Description +  "</p></div>");
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
