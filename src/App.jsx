import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
import Footer from "./components/Footer";

import {
  Container,
  Flex,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false)

  setTimeout(()=>{
      setLoader(false)
  }, 3000)

  function getSearchValue(e) {
    const target = e.target;
    if (target.value.length > 0) {
      setSearchValue(target.value);
    }
  }

  useEffect(() => {
    if (searchValue.length > 1 && loading) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((res) => {
          setWord(res.data[0]);
          setSuccess(true);
        })
        .catch((error) => console.log(error));
    }
  }, [loading, searchValue]);

  function getWord(e) {
    if (e.key === "Enter" || e.target.id === 'search') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      e.target.blur()
    }
  }

  const bg = useColorModeValue("gray.50", "blackAlpha.800");

  return (
    <Container
      w={[480, 600, 1400]}
      maxW="100%"
      minH={"100vh"}
      bg={bg}
      position="relative"
      display='flex'
      flexDir='column'
    >
      <Header />
      <SearchBar
        getValue={getSearchValue}
        getWord={getWord}
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
      {success && !loading && <Word word={word} />}
      <Footer />
    </Container>
  );
}

export default App;