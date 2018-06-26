var VideoListView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('sync', this.render, this)
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.empty()
    this.collection.forEach(this.renderVideoListEntry,this)
    return this;
  },
    renderVideoListEntry: function(video){
        // debugger
        var videoListEntryView = new VideoListEntryView({model:video})
        this.$el.append(videoListEntryView.render())
    },

  template: templateURL('src/templates/videoList.html')

});


// this.collection.forEach(this.renderMovie, this);
//   },



//   renderMovie: function(movie) {
//     var movieView = new MovieView({model: movie});
//     this.$el.append(movieView.render());
//   }