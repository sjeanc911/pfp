App.Views.UploadPageView = Backbone.View.extend({

  events : {
    'showUploadPage'    : 'showUploadPage'
  },

  initialize: function(e) {
    console.log('init upload page');

    _.bindAll(this);
  },

  showUploadPage: function(e) {
    console.log('show upload page');
    html = _.template($j('#upload_page_tmp').html(), {});

    $j(this.el).html(html);
  }

});
