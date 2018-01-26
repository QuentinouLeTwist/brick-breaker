import Game from '../states/Game';

export default class BannerCreator {
  private context: Game;
  private fontOptions: {
    font: string,
    fontSize: number
  };

  constructor(game: Game) {
    this.context = game;
    this.fontOptions = {
      font: 'Arial',
      fontSize: 40
    };
  }

  createCentered({ text, color }) {
    let banner = this.createBanner(this.context.game.world.centerX, this.context.game.world.centerY, text);
    banner.padding.set(10, 16);
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return this.setFontBanner(banner);
  }

  createAtPosition({ x, y, text, color }) {
    let banner = this.createBanner(x, y, text);
    banner.padding.set(10, 16);
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return this.setFontBanner(banner);
  }

  setFont(font: string) {
    this.fontOptions.font = font;
  }

  setFontSize(fontSize: number) {
    this.fontOptions.fontSize = fontSize;
  }

  private setFontBanner(banner: Phaser.Text) {
    banner.font = this.fontOptions.font;
    banner.fontSize = this.fontOptions.fontSize;

    return banner;
  }

  private createBanner(x, y, text) {
    return this.context.game.add.text(x, y, text, null);
  }

}
