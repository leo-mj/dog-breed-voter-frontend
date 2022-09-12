import axios from "axios";
import { IDogAPIResponse, IImageAndBreed } from "./interfaces";

export async function getImageAndBreed(): Promise<IImageAndBreed> {
  const res: IDogAPIResponse = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
  );
  const imageURL = res.message;
  const splitURL = imageURL.split("/");
  const breedIndex = splitURL.indexOf("breeds") + 1;
  const breed = splitURL[breedIndex];
  return { imageURL: imageURL, breed: breed };
}
