import { Image } from "./Image";
import { ImageStorage } from "./Interfaces";

export class SQLStorage implements ImageStorage {
  async save(image: Image): Promise<void> {
    console.log(`Saving image ${image.getName()} to SQL storage`);
    await new Promise((resolve) => setTimeout(resolve, 300));
    console.log(`Image ${image.getName()} saved to SQL storage`);
  }
}
