var VideoListEntryView = Backbone.View.extend({

    // initialize: function(){
    //   this.model.render()  
    // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  events: {
    'click': 'handleClick'
  },

  handleClick: function(e) {
        // var video = this.model
        // window.videoPlayerView = new VideoPlayerView({el : $('.player'), model : video}).render();  
    this.model.select();
  }




    //   template: _.template('<div class="video-list-entry media">\
    //   <div class="media-left">\
    //     <img class="media-object" src="<%- snippet.thumbnails.medium.url %>" />\
    //   </div>\
    //   <div class="media-body">\
    //     <div class="video-list-entry-title"><%- snippet.title %></div>\
    //     <div class="video-list-entry-detail"><%- snippet.description %></div>\
    //   </div>\
    // </div>')

    //
    //_.template('src/templates/videoListEntry.html')
});