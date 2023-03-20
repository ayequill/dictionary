import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";

import {
  Container,
  Flex,
  Spinner,
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function getSearchValue(e) {
    const target = e.target;
    if (target.value.length > 0) {
      setSearchValue(target.value);
    }
  }

  useEffect(() => {
    if (searchValue.length > 1) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((res) => {
          setWord(res.data[0]);
          setSuccess(true);
        })
        .catch((error) => console.log(error));
    }
  }, [loading]);

  function getWord(e) {
    if (e.key === "Enter") {
      // axios
      //   .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      //   .then((res) => {
      //     setWord(res.data[0])
      //   })
      //   .catch((error) => console.log(error));

      // if(isSuccess) setWord(data[0])
      // console.log(data[0])
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  console.log(typeof word);
  const bg = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <Container
      w={[480, 600, 1400]}
      maxW="100%"
      minH={"100vh"}
      bg={bg}
      position="relative"
    >
      <Header />
      <SearchBar
        getValue={getSearchValue}
        getWord={getWord}
        searchWord={searchValue}
      />
      {loading && (
        <Flex
          justifyContent="center"
          width="100%"
          position="absolute"
          transform="translate(-50%, -50%)"
          left="50%"
          top="50%"
        >
          <Spinner size="xl" />
        </Flex>
      )}
      {/* {!loading && Object.keys(word).length > 0 && <Word word={word} />} */}
      {success && !loading && <Word word={word} />}
    </Container>
  );
}

export default App;

// transform=' translate(-50%, -50%)'
