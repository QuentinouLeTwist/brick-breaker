'use strict';
/** Imports */
require('pixi');
require('p2');
require('phaser');

import 'styles/style.styl';
import Game from './states/Game';
import { GAME_CONFIG } from './constants';


export default class App extends Phaser.Game {
  constructor(config: Phaser.IGameConfig) {
    super(config);
    this.state.add('Game', Game, false);

    this.state.start('Game');
  }
}


if (!module.parent) {
  window.onload = () => {
    new App(GAME_CONFIG);
  };
}
