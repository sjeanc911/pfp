App.Views.HomePageView = Backbone.View.extend({
  events : {
    'showHomePage'    : 'showHomePage'
  },

  initialize: function(e) {
    _.bindAll(this);
  },

  showHomePage: function(e) {
    html = _.template($j('#home_page_tmp').html(), {});

    $j(this.el).html(html);
  }

});
