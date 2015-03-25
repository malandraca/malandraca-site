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
    
    $scope.player.volume=50;
    $scope.$watch('player.volume', function() {
        console.log($scope.player.volume);
    });
    
    
    $scope.play = function(){
        //alert($scope.player.volume);
        soundPlayer.play('http://radio.pregonera.net:6366/1/;');
       
    };
  });
