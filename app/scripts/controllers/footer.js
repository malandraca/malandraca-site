'use strict';
/*global $:false */
/**
 * @ngdoc function
 * @name pregoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pregoApp
 */
angular.module('malandracaSiteApp')
  .controller('FooterCtrl', function ($scope, soundPlayer) {
    
    $scope.player = {
        volume:50,
        playing: false
    }

    $scope.$watch('player.volume', function() {
        soundPlayer.setVolume($scope.player.volume);
    });
    
    $scope.play = function(){
        soundPlayer.play();
        $scope.player.playing = soundPlayer.isPlaying();
    };
    
    $scope.stop = function(){
        soundPlayer.stop();
        $scope.player.playing = false;
    };
    
    $scope.$on('onStopSlide', function(event, mass) { alert('pepe'); });
    
    
    $scope.play();
  });
