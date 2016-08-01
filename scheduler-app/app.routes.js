/**
 * Created by Mike on 7/24/2016.
 */

(function() {
  'use strict';

  angular.
  module('schedulerApp').
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/proposeNew', {
        templateUrl: '/scheduler-app/components/propose-new/propose-new.html',
        controller: 'ProposeNewCtrl',
        controllerAs: 'vm'
      });
    $routeProvider.otherwise({redirectTo: '/proposeNew'});
  }]);
})();
