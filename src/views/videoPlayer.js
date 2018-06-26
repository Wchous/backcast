var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    // this.collection.on("select",this.render, this);   
  },
  
  render: function() {
    console.log(this.model)
    this.$el.empty();
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),
});
