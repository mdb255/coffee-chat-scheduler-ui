/**
 * Created by Mike on 7/24/2016.
 */

(function() {
  'use strict';

  angular.module('appConfig', [])
    .constant('appConfig',
      {
        'apiUrl': 'http://coffeechat.mikeindevelopment.com:8080/wedding-ws/v1',
        'webRootPath': '/'
      });
})();