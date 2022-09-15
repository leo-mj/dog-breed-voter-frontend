export interface IImageAndBreed {
  imageURL: string;
  breed: string;
}

export interface IDogAPIResponse {
  message: string;
  status: string;
}

export interface IDataTopTen {
  breed_id: number;
  dog_breed: string;
  votes: number;
}

export interface IVotingToolProps {
  votesRegistered: number;
  setVotesRegistered: React.Dispatch<React.SetStateAction<number>>;
}
