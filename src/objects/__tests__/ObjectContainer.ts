import ObjectContainer from '../ObjectContainer';
import ObjectFactory from '../ObjectFactory';
import * as Phaser from 'phaser-mock';
import Paddle from '../gameElements/Paddle';
import {mock, when, instance} from 'ts-mockito';
import Ball from '../gameElements/Ball';
import RestartButton from "../buttons/RestartButton";
import Brick from "../gameElements/Brick";

const mockedPhaserSprite: Phaser.Sprite = mock(Phaser.Sprite);
const mockedPhaserContext: Phaser.State = mock(Phaser.State);
const mockedObjectFactory: ObjectFactory = mock(ObjectFactory);
const spriteMock = instance(mockedPhaserSprite);

let objectContainer, objectFactory;

const config = {
  x: 1,
  y: 1,
  context: mockedPhaserContext
};

describe('createPaddle()', () => {
  test ('it creates a paddle object', () => {
    const mockedPaddle: Paddle = mock(Paddle);

    assumeMockReturnsSprite(mockedPaddle);

    const paddleMock = instance(mockedPaddle);
    when(mockedObjectFactory.createObject('paddle', mockedPhaserContext)).thenReturn(paddleMock);
    objectFactory = instance(mockedObjectFactory);

    objectContainer = new ObjectContainer(objectFactory);

    expect(objectContainer.paddle).toBe(undefined);

    objectContainer.createPaddle(config.x, config.y, config.context);

    expect(objectContainer.paddle).toBe(paddleMock);
  });
});

describe('createBall()', () => {
  test ('it creates a ball object', () => {
    const mockedBall: Ball = mock(Ball);

    assumeMockReturnsSprite(mockedBall);

    const ballMock = instance(mockedBall);
    when(mockedObjectFactory.createBall(mockedPhaserContext)).thenReturn(ballMock);
    objectFactory = instance(mockedObjectFactory);

    objectContainer = new ObjectContainer(objectFactory);

    expect(objectContainer.ball).toBe(undefined);

    objectContainer.createBall(config.x, config.y, config.context);

    expect(objectContainer.ball).toBe(ballMock);
  });
});

describe('createRestartBtn()', () => {
  test ('it creates a restart button object', () => {
    const mockedRestartButton: RestartButton = mock(RestartButton);

    assumeMockReturnsSprite(mockedRestartButton);

    const restartBtnMock = instance(mockedRestartButton);
    when(mockedObjectFactory.createObject('restartBtn', mockedPhaserContext)).thenReturn(restartBtnMock);
    objectFactory = instance(mockedObjectFactory);

    objectContainer = new ObjectContainer(objectFactory);

    expect(objectContainer.buttons.restart).toBe(undefined);

    objectContainer.createRestartBtn(config.x, config.y, config.context);

    expect(objectContainer.buttons.restart).toBe(restartBtnMock);
  });
});

describe('createBrick()', () => {
  test ('it creates a brick object and returns its sprite', () => {
    const mockedBrick: Brick = mock(Brick);

    assumeMockReturnsSprite(mockedBrick);

    const brickMock = instance(mockedBrick);
    when(mockedObjectFactory.createObject('brick', mockedPhaserContext)).thenReturn(brickMock);
    objectFactory = instance(mockedObjectFactory);

    objectContainer = new ObjectContainer(objectFactory);

    expect(objectContainer.createBrick(config.x, config.y, config.context)).toBe(spriteMock);
  });
});

function assumeMockReturnsSprite(mock) {
  when(mock.create(1, 1)).thenReturn(spriteMock);
}
