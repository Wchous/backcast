var AppView = Backbone.View.extend({

  el: '#app',



  initialize: function() {
    this.videos = this.collection; 
    this.video = this.collection.at(0);
    // this.collection.on('select', (e)=>{this.render(e);},this);
    this.collection.on('reset', ()=>{this.render(this.videos.at(0))}, this);


    this.render();
  },
  

  

  render: function(videoToDisplay) {
    var video = videoToDisplay || this.video ;
    this.$el.html(this.template());
    new VideoListView({ el: this.$('.list'), collection: this.collection }).render();
    new SearchView({el: $('.search'), collection : this.collection}).render();
    new VideoPlayerView({el : $('.player'), collection : this.collection}).render(this.collection.at(0));
      
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