import { Image } from "./Image";
import { ColorApplier } from "./Interfaces";

export class ImageColorApplier implements ColorApplier {
  applyColor(image: Image, color: string): void {
    console.log(`Applying color ${color} to image ${image.getName()}`);
    image.setMetadata(image.getMetadata() + `|color:  ${color}`);
  }
}
