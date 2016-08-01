/**
 * Created by Mike on 7/24/2016.
 */

// document.write("Hello Worlds!!!!");

// require('./scheduler-app/app.js');


/** Entry point for Webpack **/

(function() {
  "use strict";

  var stylesContext = require.context('./assets/src/styles', true, /\.scss$/);
  stylesContext.keys().forEach(stylesContext);

  var angularAppContext = require.context('./scheduler-app', true, /\.js/);
  angularAppContext.keys().forEach(angularAppContext);
})();