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

Node.reopenClass({
  FIXTURES: [
    { id: 'step-1', name: "Steg 1", ord: 1, type: "section", children: [ "step-1/ch-1", "step-1/ch-2", "step-1/ch-3", "step-1/ch-4" ], parent: null },
    { id: 'step-2', name: "Steg 2", ord: 2, type: "section", children: [], parent: null },

    { id: "step-1/ch-1", name: "Algebra och linjära modeller", ord: 1, type: "section", children: [ "step-1/ch-1/sec-1", "step-1/ch-1/sec-2", "step-1/ch-1/sec-3" ], parent: "step-1" },
    { id: "step-1/ch-2", name: "Algebra och icke-linjära modeller", ord: 2, type: "section", children: [], parent: "step-1" },
    { id: "step-1/ch-3", name: "Geometri", ord: 3, type: "section", children: [], parent: "step-1"  },
    { id: "step-1/ch-4", name: "Statistik", ord: 4, type: "section", children: [], parent: "step-1" },

    { id: "step-1/ch-1/sec-1", name: "Repetition av algebra och funktioner", ord: 1, type: "section", children: [ "step-1/ch-1/sec-1/vid-1", "step-1/ch-1/sec-1/vid-2" ], parent: "step-1/ch-1" },
    { id: "step-1/ch-1/sec-2", name: "Räta linjens ekvation", ord: 2, type: "section", children: [], parent: "step-1/ch-1" },
    { id: "step-1/ch-1/sec-3", name: "Linjära ekvationssystem", ord: 3, type: "section", children: [], parent: "step-1/ch-1" },

    { id: "step-1/ch-1/sec-1/vid-1", name: "Descartes och Kartesiska Koordinater", ord: 1, type: "video", children: [], parent: "step-1/ch-1/sec-1", content: 'zpOULjyy-n8' },
    { id: "step-1/ch-1/sec-1/vid-2", name: "Att rita grafer med koordinater", ord: 2, type: "video", children: [], parent: "step-1/ch-1/sec-1", content: 'kI9nFOzz1t8' }
  ]
});

export default Node;
