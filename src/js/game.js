(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      var sprite = this.add.sprite(0,0,'button');
      sprite.inputEnabled = true;
      var counter = 0;
      var score = this.add.text(1, 20, 'Score: ' + counter , { font: '18px Arial', fill: '#3B6CCD' });
      sprite.events.onInputDown.add(function(){
        sprite.animations.add('pressed',[0,1]);
        sprite.animations.play('pressed');
        this.sound.play('button');
      }, this);

      sprite.events.onInputUp.add(function(){
        sprite.animations.add('unpressed',[1,0]);
        sprite.animations.play('unpressed');
        counter++;
        score.text = 'Score : ' + counter;
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
