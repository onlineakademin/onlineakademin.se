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
  }.observes('menuVisible')
});
