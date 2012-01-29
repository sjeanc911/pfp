App.bind('displayHomePageContent', function(params) {
  App.Data.HomePage.el.trigger('showHomePage', params);
});

App.bind('displayAdminPageContent', function(params) {
  App.Data.AdminPage.el.trigger('showAdminPage', params);
});

App.bind('displayUploadPageContent', function(params) {
  App.Data.UploadPage.el.trigger('showUploadPage', params);
});

App.bind('displayDbInfoPageContent', function(params) {
  App.Data.DbInfoPage.el.trigger('showDbInfoPage', params);
});

App.bind('hideUploadForm', function(params) {
  App.Data.AdminPage.el.trigger('hideUploadForm', params);
});

App.bind('uploadDone', function(params) {
  App.Data.AdminPage.el.trigger('uploadDone', params);
});

App.bind('uploadAbstractDone', function(params) {
  App.Data.UploadPage.el.trigger('uploadAbstractDone', params);
});
