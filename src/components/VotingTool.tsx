import { useEffect, useState } from "react";
import { getImageAndBreed } from "../utils/getImageAndBreed";
import { IImageAndBreed } from "../utils/interfaces";

export function VotingTool(): JSX.Element {
  const [dogOne, setDogOne] = useState<IImageAndBreed | null>(null);
  const [dogTwo, setDogTwo] = useState<IImageAndBreed | null>(null);
  useEffect(() => {
    const getImages = async () => {
      const firstDog = await getImageAndBreed();
      setDogOne(firstDog);
      let secondDog = await getImageAndBreed();
      while (secondDog.breed === firstDog.breed) {
        secondDog = await getImageAndBreed();
      }
      setDogTwo(secondDog);
    };
    getImages();
  }, []); // potentially add variable to dependency array for when someone casts a vote, so that they get new dogs to vote on
  return (
    <>
      <h1>{dogOne}</h1>
      <h1>{dogTwo}</h1>
    </>
  );
}
