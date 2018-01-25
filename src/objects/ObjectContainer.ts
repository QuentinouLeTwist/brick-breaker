import Paddle from './gameElements/Paddle';
import Ball from './gameElements/Ball';
import ObjectFactory from './ObjectFactory';

export default class ObjectContainer {
  paddle: Paddle;
  ball: Ball;
  buttons: any = {};
  private objectFactory: ObjectFactory;

  constructor(objectFactory: ObjectFactory) {
    this.objectFactory = objectFactory;
  }

  createPaddle(x: number, y: number, context?: Phaser.State) {
    this.paddle = this.objectFactory.createObject('paddle', context);
    this.paddle.create(x, y);
  }

  createBall(x: number, y: number, context?: Phaser.State) {
    this.ball = this.objectFactory.createBall(context);
    this.ball.create(x, y);
  }

  createRestartBtn(x: number, y: number, context?: Phaser.State) {
    this.buttons.restart = this.objectFactory.createObject('restartBtn', context);
    this.buttons.restart.create(x, y);
  }

  createBrick(x: number, y: number, context?: Phaser.State) {
    const brick = this.objectFactory.createObject('brick', context);
    return brick.create(x, y);
  }
}
