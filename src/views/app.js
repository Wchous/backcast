var AppView = Backbone.View.extend({

  el: '#app',



  initialize: function() {
  console.log(this.collection)
    this.collection.on('select', (e)=>{this.render(e)},this)
    // this.collection.on('select')
    this.videos = this.collection; 
    this.video = this.collection.at(0);
    this.render();
  },
  

  

  render: function(videoToDisplay) {
    var video = videoToDisplay || this.video
    this.$el.html(this.template());
    new VideoListView({ el: this.$('.list'), collection: this.collection }).render();
    new VideoPlayerView({el : $('.player'), model : video}).render();
    new SearchView({el: $('.search')}).render();
      // return this;
  },

 

  template: templateURL('src/templates/app.html')

});

// render: function() {
//     new MoviesView({
//       el: this.$('#movies'),
//       collection: this.collection
//     }).render();
//   }