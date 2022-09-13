import { VotingTool } from "./components/VotingTool";
import { TopTen } from "./components/TopTen";

function App(): JSX.Element {
  return (
    <>
      <VotingTool />
      <TopTen />
      <footer>
        <a href="https://dog.ceo/dog-api/">Thanks to Dog API </a>
      </footer>
    </>
  );
}

export default App;
