'use strict';

/**
 * @ngdoc service
 * @name malandracaSiteApp.soundPlayer
 * @description
 * # soundPlayer
 * Service in the malandracaSiteApp.
 */
angular.module('malandracaSiteApp')
  .factory('soundPlayer', [
    'soundManager', function (soundManager) {
        return {
            // the method play gets a relative/absolute sound file url to play
            play: function (url) {
                soundManager.setup({
                    // set debugMode to 'false' for less verbose
                    debugMode: true,
                    url: 'REPLACE_WITH_YOUR_SWF_PATH',
                    onready: function () {
                        var mySound = soundManager.createSound({
                            url: url
                        });
                        mySound.play();
                    },
                    // some error handling
                    ontimeout: function () {
                        alert('error!');
                        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
                    }
                });
            },
            stop: function(){
                
            }
        }
    }
]);
