import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
import { Container } from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [word, setWord] = useState([]);

  function getSearchValue(e) {
    const target = e.target;
    if (target.value.length > 0) {
      setSearchValue(target.value);
    }
  }

  useEffect(() => {
    getWord;
  }, [searchValue]);

  function getWord(e) {
    if (e.key === "Enter" && searchValue.length > 0) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((res) => setWord(res.data[0]))
        .catch((error) => console.log(error));
    }
  }

  console.log(word.length > 0);
  console.log(word);

  return (
    <Container
      w={[480, 600, 1400]}
      maxW="100%"
      border="1px solid black"
      minH={"100vh"}
    >
      <Header />
      <SearchBar
        getValue={getSearchValue}
        getWord={getWord}
        searchWord={searchValue}
      />
      {Object.keys(word).length > 0 && <Word word={word} />}
    </Container>
  );
}

export default App;
