import Paddle from './gameElements/Paddle';
import Ball from './gameElements/Ball';
import RestartButton from './buttons/RestartButton';
import Brick from './gameElements/Brick';

export default class ObjectFactory {
  private context: Phaser.State;

  constructor(context: Phaser.State) {
    this.context = context;
  }

  createObject(objectType: string, context?: Phaser.State) {
    if (context === undefined) {
      context = this.context;
    }

    switch (objectType) {
      case 'paddle':
        return new Paddle(context);
      case 'ball':
        return new Ball(context);
      case 'restartBtn':
        return new RestartButton(context);
      case 'brick':
        return new Brick(context);
      default: break;
    }
  }

}
