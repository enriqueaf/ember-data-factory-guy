module.exports = {
  // Hack for previous versions of Ember CLI
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('ember-data-factory-guy');
  },

  initialize: function(container, application) {
    console.log('dude blueprint')
  }
};