// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var uni_prot_releases_path = window._uni_prot_releases_path;

var App = {
  Views: {},
  Models: {},
  Data: {},

  initialize : function(e) {
    App.Data.Banner = new App.Views.BannerView({ el: $j('#banner') });
    App.Data.SideBar = new App.Views.SidebarView({ el : $j('#sidebar')});

    App.Data.HomePage = new App.Views.HomePageView({ el : $j('#home')});
    App.Data.AdminPage = new App.Views.AdminPageView({ el : $j('#admin')});
    App.Data.UploadPage = new App.Views.UploadPageView({ el : $j('#predict')});
    App.Data.DbInfoPage = new App.Views.DbInfoPageView({ el : $j('#db_info')});

    App.trigger('displayHomePageContent');
  }
};

$j(document).ajaxSend( function(e,req,settings) {
  if (typeof(App.AUTH_TOKEN) !== "undefined"){
    if(settings.data) {
      settings.data += "&";
    }
    else {
      settings.data = '';
      req.setRequestHeader('Content-Type', settings.contentType);
    }
    settings.data += "authenticity_token=" + encodeURIComponent(App.AUTH_TOKEN);}
});

_.extend(App, Backbone.Events);

$j(function() {
  App.AUTH_TOKEN = $j("meta=[name=''csrf-token]").attr('content');
  App.initialize();
} );
