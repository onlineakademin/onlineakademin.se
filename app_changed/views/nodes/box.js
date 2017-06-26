import Ember from 'ember';

export default Ember.View.extend({
  isExpanded: false,
  templateName: 'nodes/box',
  tagName: 'li',

  create: function() {
    this.set('isExpanded', true);
  },

  actions: {
    toggleExpand: function() {
      this.toggleProperty('isExpanded');
    }
  }
});
