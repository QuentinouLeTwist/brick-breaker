import {PADDLE_CONFIG} from '../config/paddle_config';

require('phaser');

import * as Config from '../constants';
import BrickGenerator from '../services/brick/BrickGenerator';
import BrickResourceLoader from '../services/brick/BrickResourceLoader';
import PhaserResourceLoader from '../services/loader/PhaserResourceLoader';
import { Brick } from '../objects/brick/Brick';

export default class Game extends Phaser.State {

  private rowsOfBricks: Array<Array<Brick>> = [];
  private ball: Phaser.Sprite;
  private paddle: Phaser.Sprite;
  private cursors: Phaser.CursorKeys;
  private bricksGroups: Array<Phaser.Group> = [];

  preload() {
    const phaserResourceLoader = new PhaserResourceLoader(this.game);
    this.loadBrickResources(phaserResourceLoader);
    this.loadPaddleResources();
    this.game.load.image('ball', 'assets/images/ball.png');
  }

  create() {
    this.game.renderer.renderSession.smoothProperty;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.setBoundsToWorld();

    this.createBricks();
    this.createPaddle();
    this.createBall();

    this.cursors = this.game.input.keyboard.createCursorKeys();

  }


  update() {


    if (this.cursors.left.isDown) {
      this.paddle.body.velocity.x = -600;
    } else if (this.cursors.right.isDown) {
      this.paddle.body.velocity.x = 600;
    } else {
      this.paddle.body.velocity.x = 0;
    }

    this.game.physics.arcade.collide(this.ball, this.paddle, (ball, paddle) => {
      let segmentHit = Math.floor((ball.x - paddle.previousPosition.x) / PADDLE_CONFIG.paddleSegmentWidth);

      if (segmentHit >= PADDLE_CONFIG.paddleSegmentsMax) {
        segmentHit = PADDLE_CONFIG.paddleSegmentsMax - 1;
      } else if (segmentHit <= -PADDLE_CONFIG.paddleSegmentsMax) {
        segmentHit = -(PADDLE_CONFIG.paddleSegmentsMax - 1);
      }
      console.log('segmentHit', segmentHit);
    });

    this.bricksGroups.forEach((group) => {
      this.game.physics.arcade.collide(this.ball, group, (ball, brick) => {
        brick.kill();
      });
    });

  }

  render() {
    this.game.debug.geom(this.ball, '#ffffff');
  }

  private loadBrickResources(phaserResourceLoader: PhaserResourceLoader) {
    const brickResourceLoader = new BrickResourceLoader(phaserResourceLoader);
    brickResourceLoader.load(Config.GAME_CONFIG.brick.sizes);
  }

  private loadPaddleResources() {
    this.game.load.image('paddle', 'assets/images/paddle_full.png');
    this.game.load.image('paddle_side', 'assets/images/paddle_side.png');
  }

  private createBricks() {
    const brickGenerator = new BrickGenerator(this.game);
    this.rowsOfBricks = brickGenerator.generateRowsOfBricks(Config.GAME_CONFIG.brick.numberRowsOfBricks);
    this.drawBricks();
  }

  private drawBricks() {
    this.rowsOfBricks.forEach((row: Array<any>) => {
      const bricksGroup = this.game.add.group();
      row.forEach((brick: Brick) => {
        const brickSprite = this.game.add.sprite(brick.initialX, brick.initialY, brick.imageRef);
        this.game.physics.enable(brickSprite, Phaser.Physics.ARCADE);
        brickSprite.body.enable = true;
        brickSprite.body.immovable = true;
        bricksGroup.add(brickSprite);
      });
      bricksGroup.enableBody = true;
      bricksGroup.physicsBodyType = Phaser.Physics.ARCADE;
      this.bricksGroups.push(bricksGroup);
    }, this);
  }

  private createPaddle() {
    this.paddle = this.game.add.sprite(200, 360, 'paddle');
    this.enablePhysicsFor(this.paddle);
    this.paddle.body.enable = true;
    this.paddle.body.collideWorldBounds = true;
    this.paddle.body.immovable = true;
  }

  private createBall() {
    this.ball = this.game.add.sprite(200, 200, 'ball');
    this.enablePhysicsFor(this.ball);
    this.ball.body.enable = true;
    this.ball.body.collideWorldBounds = true;
    this.ball.body.checkCollision.left = false;
    this.ball.body.checkCollision.right = false;
    this.ball.body.bounce.setTo(1);

    this.game.physics.arcade.velocityFromAngle(110, 400, this.ball.body.velocity);
  }

  private enablePhysicsFor(gameObjects: Array<Phaser.Sprite>|Phaser.Sprite) {
    this.game.physics.arcade.enable(gameObjects);
  }
}
