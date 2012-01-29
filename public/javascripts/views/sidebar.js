App.Views.SidebarView = Backbone.View.extend({
  targetDiv : 'content',

  events : {
    'click .nav_link'    : 'selectNavLink'
  },

  initialize : function(e) {
    html = _.template($j('#sidebar_tmp').html(), {});
    $j(this.el).html(html);
    $j(this.el).find('#home_page').addClass('active');

    _.bindAll(this);
  },

  selectNavLink: function(e) {
    var targetPage = e.currentTarget;
    var targetId = $j(targetPage).attr('id');

    $j(targetPage).siblings('.nav_link').removeClass('active');
    $j(targetPage).addClass('active');
    this.prepareTargetDiv(targetId);

    if (targetId == 'home_page') { App.trigger('displayHomePageContent', {});    }
    else if (targetId == 'upload_page') {  App.trigger('displayUploadPageContent', {});    }
    else if (targetId == 'admin_page') {  App.trigger('displayAdminPageContent', {});    }
    else if (targetId == 'db_info_page') {  App.trigger('displayDbInfoPageContent', {});    }
  },

  prepareTargetDiv: function(targetId)
  {
    $j('#content').children().html('');
  }


});
