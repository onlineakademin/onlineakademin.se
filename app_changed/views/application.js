import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application-view'],
  menuVisible: false,

  actions: {
    toggleMenu: function() {
      this.toggleProperty('menuVisible');
    },

    closeMenu: function() {
      this.set('menuVisible', false);
    }
  },

  menuVisibleChanged: function() {
    Ember.$('body').toggleClass('with-menu', this.get('menuVisible'));
  }.observes('menuVisible'),

  pathChanged: function() {
    // hide menu and scroll to top whenever the application
    // path has changed.
    this.set('menuVisible', false);
    window.scrollTo(0, 0);
  }.observes('controller.currentPath'),

  didInsertElement: function() {
    this._super();

    var onScroll = function() {
      var $intro = Ember.$("#intro .splash-panel-content");
      
      if ($intro.position()) {
        var state = Ember.$(this).scrollTop() > $intro.position().top - 20;
        Ember.$('.site-header').toggleClass('unmelt', state);
      }
    };

    Ember.$(document).bind('touchmove', onScroll);
    Ember.$(window).bind('scroll', onScroll);
  },

  willRemoveElement: function() {
    Ember.$(window).unbind('scroll');
    Ember.$(document).unbind('touchmove');
  }
});
