import { Image } from "./Image";
import { ImageManipulator } from "./Interfaces";

export class CropManipulator implements ImageManipulator {
  manipulate(image: Image): void {
    console.log(`Cropping image ${image.getName()}`);
    image.setMetadata(image.getMetadata() + "| cropped");
  }
}

export class SharpenManipulator implements ImageManipulator {
  manipulate(image: Image): void {
    console.log(`Sharpening image ${image.getName()}`);
    image.setMetadata(image.getMetadata() + "| sharpened");
  }
}
