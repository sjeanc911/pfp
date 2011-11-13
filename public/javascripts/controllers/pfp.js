App.bind('displayHomePageContent', function(params) {
  console.log('trigger home page');
  App.Data.HomePage.el.trigger('showHomePage', params);
});

App.bind('displayAdminPageContent', function(params) {
  console.log('trigger admin page');
  App.Data.AdminPage.el.trigger('showAdminPage', params);
});

App.bind('displayUploadPageContent', function(params) {
  console.log('trigger upload page');
  App.Data.UploadPage.el.trigger('showUploadPage', params);
});

App.bind('displayDbInfoPageContent', function(params) {
  console.log('trigger db info page');
  App.Data.DbInfoPage.el.trigger('showDbInfoPage', params);
});
