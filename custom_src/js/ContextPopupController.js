goog.provide('ga_contextpopup_controller');
(function() {

  var module = angular.module('ga_contextpopup_controller', []);

  module.controller('GaContextPopupController',
      function($scope, gaGlobalOptions) {
        $scope.options = {
          //---START---
          //heightUrl: gaGlobalOptions.apiUrl + '/rest/services/height',
          //---END---
          //+++START+++
          heightUrl: gaGlobalOptions.apiUrl + '/height',
          //++++END+
          qrcodeUrl: gaGlobalOptions.apiUrl + '/qrcodegenerator',
          lv03tolv95Url: 'https://geodesy.geo.admin.ch/reframe/lv03tolv95'
        };

      });

})();
