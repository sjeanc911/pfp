App.Views.UploadPageView = Backbone.View.extend({

  events : {
    'showUploadPage'                                      : 'showUploadPage',
    'click a#show_upload_abstract_form'         : 'uploadAbstractFile',
    'click a#show_enter_abstract_form'            : 'enterAbstractContent',
    'click a#cancel_predict_abstract'                  : 'cancelUploadAbstract',
    'uploadAbstractDone'                                  : 'uploadDone'
  },

  initialize: function(e) {
    _.bindAll(this);
  },

  showUploadPage: function(e) {
    html = _.template($j('#upload_page_tmp').html(), {});

    $j(this.el).html(html);
  },

  uploadAbstractFile: function(e) {
    form = _.template($j("#upload_abstract_tmp").html(), {});

    $j("#form_container").html(form);
  },

  enterAbstractContent: function(e) {
    form = _.template($j("#enter_abstract_tmp").html(), {});

    $j("#form_container").html(form);
  },

  hideUploadForm: function(e) {
    $j("#form_container").html("");
  },

  uploadDone: function(e) {
    console.log('upload abstract done');
    this.hideUploadForm();
  },

  cancelUploadAbstract: function(e) {
    this.hideUploadForm();
  }

});
