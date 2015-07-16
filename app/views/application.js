import Ember from 'ember';

export default Ember.View.extend({
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
    $('body').toggleClass('with-menu', this.get('menuVisible'));
  }.observes('menuVisible'),

  didInsertElement: function() {
    var onScroll = function() {
      var $intro = $("#intro .splash-panel-content");
      var state = $(this).scrollTop() > $intro.position().top - 20;

      $('.site-header').toggleClass('unmelt', state);
    }

    $(document).bind('touchmove', onScroll);
    $(window).bind('scroll', onScroll);
  },

  willRemoveElement: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }
});
