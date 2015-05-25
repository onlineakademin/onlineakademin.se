import DS from 'ember-data';

let Node =  DS.Model.extend({
  name: DS.attr('string'),
  ord: DS.attr('number'),
  type: DS.attr('string'),
  content: DS.attr('string'),

  children: DS.hasMany('node', { inverse: 'parent', async: true }),
  parent: DS.belongsTo('node', { inverse: 'children', async: true }),

  level: function() {
    var path = this.get('id');
    if (!path) { return null; }

    var n = path.split('/').length - 1;
    return n;
  }.property('id'),

  marker: function() {
    if (this.get('level') == 1) {
      return this.get('ord');
    }
    return this.get('parent.ord') + '.' + this.get('ord');
  }.property('ord', 'level', 'parent'),

  componentName: function() {
    var type = this.get('type');
    if (type) {
      return 'node-type/' + type;
    }
    return 'node-type/blank';
  }.property('type')
});

export default Node;
