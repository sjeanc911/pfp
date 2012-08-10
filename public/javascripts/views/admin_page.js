App.Views.AdminPageView = Backbone.View.extend({

  events : {
    'showAdminPage'                             : 'showAdminPage',
    'hideUploadForm'                             : 'hideUploadForm',
    'click a#add_stopwords_link'            : 'addStopwords',
    'change #add_stopwords_upload'     : 'uploadStopwords',
    'change #add_stopwords_enter'        : 'enterStopwords',
    'uploadDone'                                    : 'uploadDone'
  },

  initialize: function(e) {
    _.bindAll(this);
  },

  showAdminPage: function(e) {
    html = _.template($j('#admin_page_tmp').html(), {});

    $j(this.el).html(html);
  },

  hideUploadForm: function(e) {
    $j('#form_container').html('');
  },

  addStopwords: function(e) {
    form = _.template($j('#add_stopwords_tmp').html(), {});
    $j('#form_container').html(form);
  },

  uploadStopwords : function(e) {
    uploadHtml = _.template($j("#upload_stopwords_tmp").html(), {});
    $j(".add_stopwords .fieldset").replaceWith(uploadHtml);
  },

  enterStopwords: function(e) {
    enterHtml = _.template($j("#enter_stopwords_tmp").html(), {});
    $j(".add_stopwords .fieldset").replaceWith(enterHtml);
  },

  uploadDone: function(e) {
    this.hideUploadForm();
  }

});
