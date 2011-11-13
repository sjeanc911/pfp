App.Views.HomePageView = Backbone.View.extend({
  events : {
    'showHomePage'    : 'showHomePage'
  },

  initialize: function(e) {
    console.log('init home page');

    _.bindAll(this);
  },

  showHomePage: function(e) {
    console.log('show home page');
    html = _.template($j('#home_page_tmp').html(), {});

    $j(this.el).html(html);
  }

});
