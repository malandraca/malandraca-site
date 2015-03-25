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
    'soundManager', 'STREAM_URL', function (soundManager, streamUrl) {
        var volume = 50,
            soundStreamId = 'malandracaRadioStream',
            radioSound;
        var soundManagerContext = {
            play: function (url) {
                if(soundManager.ok()){
                     if (radioSound !=null){
                        if(radioSound.playState == 0){
                            radioSound.play();
                        }
                     }
                }
            },
            getVolume: function(){
                return volume;
            },
            setVolume: function(changedValue){
                if(soundManager.ok() && radioSound!= null){
                    if(changedValue > 100) changedValue = 100;
                    if(changedValue < 0) changedValue = 0;

                    try{	
                       radioSound.setVolume(changedValue);
                    }catch(e){};
                }
                volume = changedValue;
            },
            stop: function(){
                soundManager.unload(soundStreamId);
                soundManagerContext.createSound();
                soundManager.stopAll();
            },
            createSound:function(){
                radioSound = soundManager.createSound({
                        id: soundStreamId,
                        url: streamUrl,
                        autoPlay: false,
                        stream: true,
                        autoLoad: true,
                        volume: 50
                });
            },
            isPlaying: function(){
                 if (radioSound !=null){
                    return radioSound.playState == 1;
                 }
                 return false;
            }
        }
        
           //init sound manger
        try{
            soundManager.setup({
                    // set debugMode to 'false' for less verbose
                    debugMode: true,
                    url: 'REPLACE_WITH_YOUR_SWF_PATH',
                    useHighPerformance: true,
                    preferFlash: true,
                    useFastPolling:true,
                    onready: function () {
                        soundManagerContext.createSound();
                    },
                    // some error handling
                    ontimeout: function () {
                        //soundManager.destroySound(this.soundId);
                    }
                });
        }catch(ex){
            console.log('Cannot instanciate sound manager');
        }
        
        
        
        
        
        return soundManagerContext;
        
    }
]);
