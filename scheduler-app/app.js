/**
 * Created by Mike on 7/24/2016.
 */

(function() {
  'use strict';

  console.log("test!");

  angular.module('schedulerApp', [
    'ngRoute',
    'ui.bootstrap',
    'appConfig'
  ]); //.
  // run(['$rootScope', '$location', '$log', function($rootScope, $location, $log) {
  //   // Watch the URL location to update the active tab on the navbar
  //   var path = function() { return $location.path(); };
  //   $rootScope.$watch(path, function(newVal, oldVal) {
  //     $rootScope.activeTab = newVal;
  //     $log.debug("ActiveTab: " + $rootScope.activeTab);
  //   });
  // }]);

})();
