'use strict';

describe('Service: soundPlayer', function () {

  // load the service's module
  beforeEach(module('malandracaSiteApp'));

  // instantiate service
  var soundPlayer;
  beforeEach(inject(function (_soundPlayer_) {
    soundPlayer = _soundPlayer_;
  }));

  it('should do something', function () {
    expect(!!soundPlayer).toBe(true);
  });

});
