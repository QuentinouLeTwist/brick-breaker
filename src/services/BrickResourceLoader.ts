import {IResourceLoader} from './loader/IResourceLoader';

export default class BrickResourceLoader {
  private loader;

  constructor(loader: IResourceLoader) {
    this.loader = loader;
  }

  load(brickSizesConfig: Array<any>) {
    brickSizesConfig.forEach((brickSizeConfig) => {
      this.loader.loadImage(brickSizeConfig.imageRef, brickSizeConfig.imageSrc);
    });
  }
}
