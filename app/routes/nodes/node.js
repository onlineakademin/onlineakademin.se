import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('node', params.wildcard);
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
