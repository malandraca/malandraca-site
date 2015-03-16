'use strict';

describe('Controller: RadioCtrl', function () {

  // load the controller's module
  beforeEach(module('malandracaSiteApp'));

  var RadioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RadioCtrl = $controller('RadioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
