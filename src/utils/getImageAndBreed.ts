import axios from "axios";
import { IImageAndBreed } from "./interfaces";

export async function getImageAndBreed(): Promise<IImageAndBreed> {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random");
  const imageURL = res.data.message;
  const splitURL = imageURL.split("/");
  const breedIndex = splitURL.indexOf("breeds") + 1;
  const breed = splitURL[breedIndex]; // Might want to capitalise first letter
  return { imageURL: imageURL, breed: breed };
}
