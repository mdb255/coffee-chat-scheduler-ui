/**
 * Created by Mike on 7/31/2016.
 */

(function() {
  "use strict";

  angular
    .module('schedulerApp')
    .component('timeProposal', {
      bindings: {
        time: '='
      },
      templateUrl: '/scheduler-app/shared/time-proposal/time-proposal.html',

      controller: function() {
        var vm = this;
        
        vm.t1 = "t1";
        
        vm.clone = clone;
        vm.edit = edit;
        vm.remove = remove;

        function clone() {
          console.log("clone");
        }

        function edit() {

        }

        function remove() {

        }
      }
    });
})();