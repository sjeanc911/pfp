App.Views.AdminPageView = Backbone.View.extend({

  events : {
    'showAdminPage'                           : 'showAdminPage',
    'click a#upload_db_link'                    : 'showUploadDbForm',
    'click a#upload_stopwords_link'        : 'showUploadStopwordsForm',
    'click #upload_db_button'                  : 'uploadDb'
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

    $j("#release_date").datepicker();
  },

  showUploadStopwordsForm: function(e) {
    form = _.template($j('#upload_stopwords_tmp').html(), {});
    $j('.form_container').html(form);
  },

  uploadDb: function(e) {
    var dbForm = $j(".upload_db_form");
    var releaseNumber = $j(dbForm).find("#release_number").attr("value"),
    date = $j(dbForm).find("#release_date").datepicker('getDate'),
    notes = $j(dbForm).find("#notes").attr("value");

    releaseDate = date.getFullYear() + "-'" + (date.getMonth() + 1) + "-" + date.getDate();




    console.log(releaseNumber);
    console.log(releaseDate);
    console.log(notes);
  }

});
