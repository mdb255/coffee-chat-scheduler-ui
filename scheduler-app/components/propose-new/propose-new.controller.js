/**
 * Created by Mike on 7/31/2016.
 */

(function() {
  "use strict";

  angular
    .module('schedulerApp')
    .controller('ProposeNewCtrl', ProposeNewCtrl);

  ProposeNewCtrl.$inject = [];

  function ProposeNewCtrl() {
    var vm = this;

    vm.data1 = "test123";
  }
})();