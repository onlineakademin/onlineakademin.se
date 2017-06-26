import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.APP.apiServer,

  // there is no need for this app to keep asking for new records
  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  }
});
