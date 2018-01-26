// @todo optimize bricks creation (as it is done for other game objects)
// @todo instead of having a switch into object factory, maybe it would make sense to pass a "config object" to ObjectContainer that will instantiate the game objects based on that

require('phaser');

import * as Config from '../constants';
import BrickGenerator from '../services/brick/BrickGenerator';
import PhaserResourceLoader from '../services/loader/PhaserResourceLoader';
import {PADDLE_CONFIG} from '../config/paddle';
import { BALL_CONFIG } from '../config/ball';
import BannerCreator from '../services/BannerCreator';
import ObjectFactory from '../objects/ObjectFactory';
import GameObjectContainer from '../objects/ObjectContainer';
import {RESOURCES_MAP} from '../config/resources';

export default class Game extends Phaser.State {
  private isStarted: boolean = false;
  private startingBanner: any;
  private bannerCreator: BannerCreator;
  private objectContainer: GameObjectContainer;
  private score: number = 0;
  private rowsOfBricks: Array<Array<{x, y}>> = [];
  private numberOfBricks: number = 0;
  private bricksGroups: Array<Phaser.Group> = [];
  private cursors: Phaser.CursorKeys;

  constructor() {
    super();
    this.bannerCreator = new BannerCreator(this);
    this.objectContainer = new GameObjectContainer(new ObjectFactory(this));
  }

  preload() {
    const phaserResourceLoader = new PhaserResourceLoader(this);
    phaserResourceLoader.loadAssets(RESOURCES_MAP.assets);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.setBoundsToWorld();
    this.game.physics.arcade.checkCollision.down = false;

    this.addControls();

    this.startingBanner = this.bannerCreator.createCentered({
      text: 'CLICK HERE TO START !',
      color: 'green'
    });

  }

  private addControls() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    const keySpace = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.input.onDown.add(this.startGame, this);
    keySpace.onDown.add(this.startGame, this);
  }

  update() {

    if (!this.isStarted) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.objectContainer.paddle.sprite.body.velocity.x = -600;
    } else if (this.cursors.right.isDown) {
      this.objectContainer.paddle.sprite.body.velocity.x = 600;
    } else {
      this.objectContainer.paddle.sprite.body.velocity.x = 0;
    }

    if (this.objectContainer.ball.sprite.y > this.game.height) {
      this.gameOver();
    }

    this.game.physics.arcade.collide(this.objectContainer.ball.sprite, this.objectContainer.paddle.sprite, (ball, paddle) => {
      if (!this.objectContainer.ball.isMoving()) {
        return;
      }

      let paddleSegmentHit = Math.floor((ball.x - paddle.previousPosition.x) / PADDLE_CONFIG.paddleSegmentWidth);
      const velocity = (BALL_CONFIG.velocityX + (paddleSegmentHit * PADDLE_CONFIG.paddleSegmentAngle));

      if (paddleSegmentHit >= (PADDLE_CONFIG.paddleSegmentsMax - 1)) {
        ball.body.velocity.x = velocity;
      } else if (paddleSegmentHit <= -(PADDLE_CONFIG.paddleSegmentsMax - 1)) {
        ball.body.velocity.x = -velocity;
      }

      ball.body.velocity.y -= 20;

    });

    this.bricksGroups.forEach((group) => {
      this.game.physics.arcade.collide(this.objectContainer.ball.sprite, group, (ball, brick) => {
        brick.kill();
        if (--this.numberOfBricks === 0) {
          this.winGame();
        }
        this.score += 15;
        ball.body.velocity.y += 10;
      }, null, this);
    });

  }

  private startGame() {
    if (!this.isStarted) {
      this.createBricks();
      this.objectContainer.createPaddle(this.game.world.centerX, this.game.world.height - 20);
      this.objectContainer.createBall(this.game.world.centerX, this.objectContainer.paddle.sprite.y - 26);
      this.objectContainer.createRestartBtn(this.game.world.centerX, this.game.world.centerY + 50);
      this.objectContainer.ball.release(() => {
        this.startingBanner.kill();
        this.isStarted = true;
      });
    }
  }

  private createBricks() {
    const brickGenerator = new BrickGenerator();
    this.rowsOfBricks = brickGenerator.generateRowsOfBricks(Config.GAME_CONFIG.brick.numberRowsOfBricks);
    this.drawBricks();
  }

  private drawBricks() {
    this.rowsOfBricks.forEach((row: Array<any>) => {
      const bricksGroup = this.game.add.group();
      row.forEach(({x, y}) => {
        bricksGroup.add(this.objectContainer.createBrick(x, y));
        this.numberOfBricks++;
      });
      bricksGroup.enableBody = true;
      bricksGroup.physicsBodyType = Phaser.Physics.ARCADE;
      this.bricksGroups.push(bricksGroup);
    }, this);
  }

  private winGame() {
    this.killAll();
    this.bannerCreator.createCentered({
      text: 'YOU WIN !',
      color: '#07acbf'
    });
  }

  private gameOver() {
    this.killAll();
    this.bannerCreator.createCentered({
      text: 'GAME OVER!',
      color: 'red'
    });
  }

  private killAll() {
    this.objectContainer.ball.kill();
    this.objectContainer.paddle.kill();
  }
}
