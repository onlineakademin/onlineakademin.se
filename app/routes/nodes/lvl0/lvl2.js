import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var lvl0 = this.modelFor("nodes.lvl0");
    var id = lvl0.get('id') + "/" + params.path;
    return this.store.find('node', id);
  },

  actions: {
    willTransition: function() {
      this.controllerFor('nodes.lvl0').set('sidebarHiddenXS', false);
    },
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor('nodes.lvl0').set('sidebarHiddenXS', true);
  }
});
