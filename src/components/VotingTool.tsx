import axios from "axios";
import { useEffect, useState } from "react";
import { dataBaseURL } from "../utils/dbURL";
import { getImageAndBreed } from "../utils/getImageAndBreed";
import { IImageAndBreed } from "../utils/interfaces";
import "./votingTool.css";

interface IVotingTool {
  votesRegistered: number;
  setVotesRegistered: React.Dispatch<React.SetStateAction<number>>;
}

export function VotingTool({
  votesRegistered,
  setVotesRegistered,
}: IVotingTool): JSX.Element {
  const [dogOne, setDogOne] = useState<IImageAndBreed | null>(null);
  const [dogTwo, setDogTwo] = useState<IImageAndBreed | null>(null);
  const [theChosenOne, setTheChosenOne] = useState<string | null>(null);
  const handleVoteClick = async (chosenBreed: string) => {
    setTheChosenOne(chosenBreed);
    setVotesRegistered(votesRegistered + 1);
    await axios.post(dataBaseURL + "/", { upvotedDog: theChosenOne });
  };
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
  }, [votesRegistered]); // potentially add variable to dependency array for when someone casts a vote, so that they get new dogs to vote on
  return (
    <>
      <div className="imgContainer">
        {dogOne !== null && (
          <img
            onClick={() => handleVoteClick(dogOne.breed)}
            src={dogOne.imageURL}
            alt={dogOne.breed}
          />
        )}
        {dogTwo !== null && (
          <img
            onClick={() => handleVoteClick(dogTwo.breed)}
            src={dogTwo.imageURL}
            alt={dogTwo.breed}
          />
        )}
      </div>
    </>
  );
}
