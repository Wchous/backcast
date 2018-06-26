var Videos = Backbone.Collection.extend({

  initialize : function (collection) {
    // this.search()
    this.collection = collection || this.collection
    
  },
  
  model: Video,

  search : function (val) {
  var q = $('#searchQuery').val();
   console.log(q);
    var context = this;
    $.ajax({
       cache: false,
       data: $.extend({
         key: window.YOUTUBE_API_KEY,
         q: val,
         part: 'snippet',
       }, {maxResults:5}),
       dataType: 'json',
       type: 'GET',
       timeout: 5000,
       url: 'https://www.googleapis.com/youtube/v3/search',
       success : function (data){
         console.log('search did good! RETURNED:  ' + JSON.stringify(data.items[0]));
         context.reset(data.items);
         $('.form-control').append('<div><%= data.items[0].id.videoId %>')
       },
       error : function (data){
         console.log(' Womp womp. ');
       }
     })
  }

})
