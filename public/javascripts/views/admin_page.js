App.Views.AdminPageView = Backbone.View.extend({

  events : {
    'showAdminPage'                           : 'showAdminPage',
    'click a#upload_db_link'                    : 'showUploadDbForm',
    'hideUploadForm'                             : 'hideUploadForm',
    'click a#upload_stopwords_link'        : 'showUploadStopwordsForm',
    'uploadDone'                                      : 'uploadDone'
  },

  initialize: function(e) {
    _.bindAll(this);
  },

  showAdminPage: function(e) {
    html = _.template($j('#admin_page_tmp').html(), {});

    $j(this.el).html(html);
  },

  showUploadDbForm: function(e) {
    form = _.template($j('#upload_db_tmp').html(), {});
    $j('#form_container').html(form);

    $j("#uni_prot_release_release_date").datepicker();
  },

  hideUploadForm: function(e) {
    $j('#form_container').html('');
  },

  showUploadStopwordsForm: function(e) {
    form = _.template($j('#upload_stopwords_tmp').html(), {});
    $j('#form_container').html(form);
  },

  uploadDone: function(e) {
    console.log('upload done');
    this.hideUploadForm();
  }

});
