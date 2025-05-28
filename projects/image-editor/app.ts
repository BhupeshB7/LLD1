import { ImageColorApplier } from "./ColorFilter";
import { Image } from "./Image";
import { ImageEditor } from "./ImageEditor";
import { CropManipulator, SharpenManipulator } from "./Manipulations";
import { SQLStorage } from "./Storage";

const image = new Image("sunset", "", "");
const storage = new SQLStorage();
const editor = new ImageEditor(image, storage);

editor.clickImage();
editor.edit(
  [new CropManipulator(), new SharpenManipulator()],
  new ImageColorApplier(),
  "blue"
);
editor.printImage();
editor.saveImage();

console.log(image);
