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

  createCentered(text: string, color: string, font?: string, fontSize?: number) {
    let banner = this.createBanner(this.context.game.world.centerX, this.context.game.world.centerY, text);
    banner.padding.set(10, 16);
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return this.setFontBanner(banner, font, fontSize);
  }

  createAtPosition(x: number, y: number, text: string, color: string, font?: string, fontSize?: number) {
    if (font === undefined || font === '') {
      font = this.fontOptions.font;
    }
    if (fontSize === undefined || fontSize === 0) {
      fontSize = this.fontOptions.fontSize;
    }
    let banner = this.createBanner(x, y, text);
    banner.padding.set(10, 16);
    banner.fill = color;
    banner.smoothed = true;
    banner.anchor.setTo(0.5);

    return this.setFontBanner(banner, font, fontSize);
  }

  setFontBanner(banner: Phaser.Text, font?: string, fontSize?: number) {
    banner.font = font;
    banner.fontSize = fontSize;

    return banner;
  }

  createBanner(x: number, y: number, text: string) {
    return this.context.game.add.text(x, y, text, null);
  }

}
