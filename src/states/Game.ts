// @todo optimize bricks creation (as it is done for other game objects)

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
  private startingBanner: any;
  private bannerCreator: BannerCreator;
  private rowsOfBricks: Array<Array<{x, y}>> = [];
  private numberOfBricks: number = 0;

  private bricksGroups: Array<Phaser.Group> = [];
  private brickDrawer: BrickDrawer;

  private objectContainer: GameObjectContainer;
  private cursors: Phaser.CursorKeys;

  constructor() {
    super();
    this.brickDrawer = new BrickDrawer();
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

    this.createBricks();
    this.objectContainer.createPaddle(this.game.world.centerX, 360);
    this.objectContainer.createBall(this.game.world.centerX, this.objectContainer.paddle.sprite.y - 26);
    this.objectContainer.createRestartBtn(this.game.world.centerX, this.game.world.centerY + 50);
    this.addControls();

    this.startingBanner = this.bannerCreator.createCentered({
      text: 'PRESS SPACE TO START !',
      color: 'green'
    });

  }

  private addControls() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    const keySpace = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.game.input.onDown.add(this.releaseBall, this);
    keySpace.onDown.add(this.releaseBall, this);
  }

  update() {

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

    });

    this.bricksGroups.forEach((group) => {
      this.game.physics.arcade.collide(this.objectContainer.ball.sprite, group, (ball, brick) => {
        brick.kill();
        if (--this.numberOfBricks === 0) {
          this.winGame();
        }
      }, null, this);
    });

  }

  private releaseBall() {
    this.objectContainer.ball.release(() => {
      this.startingBanner.kill();
    });
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
