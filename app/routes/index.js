import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this._super();
    window.scrollTo(0, 0);

    Ember.$("body").addClass('page-index');
    Ember.$(".site-header").removeClass('unmelt');
  },

  deactivate: function() {
    Ember.$("body").removeClass('page-index');
  }
});
