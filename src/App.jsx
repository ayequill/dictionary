import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Container, extendTheme } from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [word, setWord] = useState([]);

  function getSearchValue(e) {
    const target = e.target;
    if (target.value.length > 0){
      setSearchValue(target.value);
    }
  }
  // const {data} = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
  // .then(res => res.data)
  // .catch(error => console.log(error))
  
  // console.log(data)

  useEffect(()=> {
    getWord
  }, [searchValue])
  
  console.log(word)
  

  function getWord(e) {
    if (e.key === "Enter" && searchValue.length > 0) {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then(res => setWord(res.data) )
      .catch(error => console.log(error))
    }
  }

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
    </Container>
  );
}

export default App;
