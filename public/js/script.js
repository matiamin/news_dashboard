$( document ).ready(function() {
//creating new article object
// var article = {
//   search: function(keyword){
//     var url = 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27news%27&Query=%27'+ keyword + '%27&$format=json';
//     $.ajax({
//       dataType: "json",
//       url: url,
//       type: "GET"
//     }).done(function(response) {
//       console.log(response);
//     });
//   },
// };
  console.log("ready!");
  $('.topic').on('click', function() {
    console.log('clicked!');
    console.log(this.val());
  });
});
