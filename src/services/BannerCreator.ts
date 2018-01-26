import Game from '../states/Game';

export default class BannerCreator {
  private context: Game;
  constructor(game: Game) {
    this.context = game;
  }

  createCentered({ text, color }) {
    let banner = this.context.game.add.text(this.context.game.world.centerX, this.context.game.world.centerY, text, null);
    banner.font = 'Arial';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return banner;
  }

  createAtPosition({ x, y, text, color }) {
    let banner = this.context.game.add.text(x, y, text, null);
    banner.font = 'Arial';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return banner;
  }
}
