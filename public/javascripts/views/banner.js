App.Views.BannerView = Backbone.View.extend({
  events : {

  },

  initialize : function(e) {
    _.bindAll(this);

    html = _.template($j('#banner_tmp').html(), {});
    $j(this.el).html(html);
  }


});
