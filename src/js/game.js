(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      this.add.sprite(0,0,'button');
      this.input.onDown.add(this.onInputDown, this);
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
