var SearchView = Backbone.View.extend({

  // initialize: function(){
  //   this.render()  
  // },
  
  render: function() {
    this.$el.empty()
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
