module.exports = {
  e2e: {
    watchForFileChanges: false, // This won't run automatically when there's a change
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);

    },
  },
};
