App.Views.DbInfoPageView = Backbone.View.extend({

  events : {
    'showDbInfoPage'    : 'showDbInfoPage'
  },

  initialize: function(e) {
    _.bindAll(this);
  },

  showDbInfoPage: function(e) {
    html = _.template($j('#db_info_page_tmp').html(), {});

    $j(this.el).html(html);
  }

});
