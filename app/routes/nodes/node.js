import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('node', params.wildcard);
  },

  // redirect to first child for level 1 nodes
  // todo fix this properly
  afterModel: function(node, transition) {
    if (node.get('level') == 0) {
      return this.transitionTo('nodes.node', node.get('id') + '/1/1');
    }
    if (node.get('level') == 1) {
      return this.transitionTo('nodes.node', node.get('id') + '/1');
    }    
  },

  renderTemplate: function(controller, model) {
    var templateName;

    switch (model.get('level')) {
      case 0:
        templateName = 'nodes/node-level-' + model.get('level');
        break;
      default:
        templateName = 'nodes/node';
    }
    this.render(templateName);
  }
});
