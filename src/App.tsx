import { useState } from "react";
import { VotingTool } from "./components/VotingTool";
import { TopTen } from "./components/TopTen";

function App(): JSX.Element {
  const [votesRegistered, setVotesRegistered] = useState<number>(0);
  return (
    <>
      <VotingTool
        votesRegistered={votesRegistered}
        setVotesRegistered={setVotesRegistered}
      />
      <TopTen />
      <footer>
        <a href="https://dog.ceo/dog-api/">Thanks to Dog API </a>
      </footer>
    </>
  );
}

export default App;
