import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],

  didInsertElement: function() {
    Ember.$(this.get('element')).click(function() {
      var target = $(this.hash);
      $("html, body").animate({ scrollTop: target.offset().top }, 1000);

      return false;
    });
  }
});
