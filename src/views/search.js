var SearchView = Backbone.View.extend({

  initialize: function(){  
  },
  
  events : {
   "click button" : "submithandler",
   //"keyup #searchQuery" : "submithandler"
  },

  submithandler : function(e) {
    var val = $(this.el).find('#searchQuery').val();
    this.collection.search(val);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
