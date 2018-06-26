var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    this.collection.on("select",(e) => {this.render(e)}, this);   
  },
  
  render: function(video) {
console.log(video.title)
    this.$el.empty();
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(video.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html'),
});
