import { Image } from "./Image";
import { ImageManipulator, ColorApplier, ImageStorage } from "./Interfaces";

export class ImageEditor {
  constructor(private image: Image, private storage: ImageStorage) {}

  clickImage(): void {
    console.log("📸 Image clicked!");
    this.image.setMetadata("captured");
    this.image.setContent("rawImageData");
  }

  edit(
    manipulators: ImageManipulator[],
    colorApplier: ColorApplier,
    color: string
  ): void {
    manipulators.forEach((m) => m.manipulate(this.image));
    colorApplier.applyColor(this.image, color);
  }

  async saveImage(): Promise<void> {
    await this.storage.save(this.image);
  }

  printImage(): void {
    console.log(`🖼️ Image: ${this.image.getName()}`);
    console.log(`ℹ️ Metadata: ${this.image.getMetadata()}`);
    console.log(`📄 Content: ${this.image.getContent()}`);
  }
}
