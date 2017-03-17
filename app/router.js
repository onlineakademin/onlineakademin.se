import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('videor', function() {
    this.route('lvl0', { path: ':lvl0_ord' }, function() {
      // lvl1 doesnt exist indepedently
      this.route('lvl2', { path: '*path' });
    });
  });

  this.route('about', function() {
  });

  this.route('om', function() {
    this.route('kontakt');
    this.route('partners');
  });

  this.route('bidra', function(){
  });
});
