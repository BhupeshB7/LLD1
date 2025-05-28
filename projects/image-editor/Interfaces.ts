import { Image } from "./Image";

export interface ImageManipulator {
  manipulate(image: Image): void;
}

export interface ColorApplier {
  applyColor(image: Image, color: string): void;
}

export interface ImageStorage {
  save(image: Image): Promise<void>;
}
