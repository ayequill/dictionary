import {
  Box,
  Button,
  Text,
  List,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Play from "../assets/play-solid.svg";



const getMeanings = (wordArray) => {
  const meanings = [];
  wordArray.meanings.map((mean) =>
    meanings.push({
      partOfSpeech: mean.partOfSpeech,
      definitions: mean.definitions,
    })
  );
  return meanings;
};


 function Word({ word }) {
  console.log(typeof word);
  const color = useColorModeValue("blackAlpha.800", "orange.500");

  function click(e) {}

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          p="0.4em 0.4em"
          alignItems="center"
        >
          <Box py="1.2em">
            <Text fontSize="2rem" fontWeight="black" color={color}>
              {word.word}
            </Text>
            <Text color="purple.400">
              {word.phonetic ? word.phonetic : word.phonetics[0].text}
            </Text>
          </Box>
          <Box>
            <Button>
              <audio onCanPlay={(e) => click(e)}>
                <source
                  src={word.phonetics[0].audio ? word.phonetics[0].audio : ""}
                  type="audio/mpeg"
                />
              </audio>
            </Button>
          </Box>
        </Box>
        <Meanings color={color} word={getMeanings(word)} />
      </Box>
    </>
  );
}

const Meanings = ({word,color}) => {
  console.log(word,color)
 return (
  <>
  {word.map((meaning) => (
          <Box py={3} px={1} boxShadow="sm" borderRadius="md">
            <Text fontStyle="italic" mb={3}>
              {meaning.partOfSpeech}
            </Text>
            <Text opacity="0.4" mb="6">
              Meaning
            </Text>
            <UnorderedList pl={5}>
              {meaning.definitions.map((def) => (
                <ListItem py={1} color={color} >{def.definition}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
  </>
 )
}


export default Word