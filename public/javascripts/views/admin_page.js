App.Views.AdminPageView = Backbone.View.extend({

  events : {
    'showAdminPage'                           : 'showAdminPage',
    'click a#upload_db_link'                    : 'showUploadDbForm',
    'click a#upload_stopwords_link'        : 'showUploadStopwordsForm'
  },

  initialize: function(e) {
    console.log('init admin page');

    _.bindAll(this);
  },

  showAdminPage: function(e) {
    console.log('show admin page');
    html = _.template($j('#admin_page_tmp').html(), {});

    $j(this.el).html(html);
  },

  showUploadDbForm: function(e) {
    form = _.template($j('#upload_db_tmp').html(), {});
    $j('.form_container').html(form);
  },

  showUploadStopwordsForm: function(e) {
    form = _.template($j('#upload_stopwords_tmp').html(), {});
    $j('.form_container').html(form);
  }

});
