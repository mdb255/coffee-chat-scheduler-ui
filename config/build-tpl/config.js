/**
 * Created by Mike on 7/24/2016.
 */

(function() {
  'use strict';

  angular.module('appConfig',[])
    .constant('appConfig',
    {
      'apiUrl': '@@apiUrl',
      'webRootPath': '@@webRootPath'
    });
})();
