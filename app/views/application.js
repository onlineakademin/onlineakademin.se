import Ember from 'ember';

export default Ember.View.extend({
  menuVisible: true,

  actions: {
    toggleMenu: function() {
      this.toggleProperty('menuVisible');
    }
  },

  menuVisibleChanged: function() {
    $('body').toggleClass('with-menu', this.get('menuVisible'));
  }.observes('menuVisible')
});
