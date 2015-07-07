import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleExpand: function(node) {
     this.$('li[data-node-id="'+node.get('id')+'"]').toggleClass('not-expanded');
    }
  },
});
