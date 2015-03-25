'use strict';

/**
 * @ngdoc directive
 * @name malandracaSiteApp.directive:footer
 * @description
 * # footer
 */
angular.module("malandracaSiteApp").directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'views/footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterCtrl'
  };
});