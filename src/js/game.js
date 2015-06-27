(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      var sprite = this.add.sprite(0,0,'button');


      this.input.onDown.add(function(){
        sprite.animations.add('pressed',[0,1]);
        sprite.animations.play('pressed');
        this.sound.play('button');
      }, this);

      this.input.onUp.add(function(){
        sprite.animations.add('unpressed',[1,0]);
        sprite.animations.play('unpressed');
      }, this);

    },

    update: function () {

    },

    onInputDown: function () {
      this.game.state.start('menu');
    }
  };

  window['button'] = window['button'] || {};
  window['button'].Game = Game;
}());
