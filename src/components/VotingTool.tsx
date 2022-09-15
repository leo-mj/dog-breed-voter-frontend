import axios from "axios";
import { useEffect, useState } from "react";
import { dataBaseURL } from "../utils/dbURL";
import { formatName } from "../utils/formatName";
import { getImageAndBreed } from "../utils/getImageAndBreed";
import { IImageAndBreed, IVotingToolProps } from "../utils/interfaces";
import "../app.css";
import { Col } from "react-bootstrap";

export function VotingTool({
  votesRegistered,
  setVotesRegistered,
}: IVotingToolProps): JSX.Element {
  const [dogOne, setDogOne] = useState<IImageAndBreed | null>(null);
  const [dogTwo, setDogTwo] = useState<IImageAndBreed | null>(null);
  const handleVoteClick = async (chosenBreed: string) => {
    await axios.post(dataBaseURL + "/", { upvotedDog: chosenBreed });
    setVotesRegistered(votesRegistered + 1);
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
  }, [votesRegistered]);
  return (
    <>
      <Col>
        {dogOne !== null && (
          <div className="singleVoteImg">
            <h1>Choose me! I am the cutest!</h1>
            <img
              onClick={() => handleVoteClick(dogOne.breed)}
              src={dogOne.imageURL}
              alt={dogOne.breed}
            />
            <p>{formatName(dogOne.breed)}</p>
          </div>
        )}
      </Col>
      <Col>
        {dogTwo !== null && (
          <div className="singleVoteImg">
            <h1>No!! Choose me, I'm cuter!</h1>
            <img
              onClick={() => handleVoteClick(dogTwo.breed)}
              src={dogTwo.imageURL}
              alt={dogTwo.breed}
            />
            <p>{formatName(dogTwo.breed)}</p>
          </div>
        )}
      </Col>
    </>
  );
}
