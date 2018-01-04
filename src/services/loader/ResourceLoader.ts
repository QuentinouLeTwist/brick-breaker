export interface ResourceLoader {
  load(assets: any);
  loadImage(reference: string, path: string);
}