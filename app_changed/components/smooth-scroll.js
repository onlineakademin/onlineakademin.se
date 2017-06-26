import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'offset'],

  didInsertElement: function() {
    var that = this;

    Ember.$(this.get('element')).click(function() {
      var offset = parseInt(that.get('offset'));      
      var target = Ember.$(this.hash);
      
      Ember.$("html, body").animate({ scrollTop: target.offset().top + offset }, 1000);

      return false;
    });
  }
});
