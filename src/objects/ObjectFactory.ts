import Paddle from './gameElements/Paddle';
import Ball from './gameElements/Ball';
import Brick from './gameElements/Brick';
import RestartButton from './buttons/RestartButton';

/**
 * @todo find why createObject('ball') won't work... it is actually considered as returning Paddle, but it returns obviously a Ball.. so...
 */
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
      case 'brick':
        return new Brick(context);
      case 'restartBtn':
        return new RestartButton(context);
      default: break;
    }
  }

  createBall(context?: Phaser.State) {
    if (context === undefined) {
      context = this.context;
    }

    return new Ball(context);
  }

}
