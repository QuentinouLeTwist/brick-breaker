export interface IResourceLoader {
  load(assets: any);
  loadImage(reference: string, path: string);
}