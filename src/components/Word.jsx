import { Box, Button, Text, List, ListItem, Flex } from "@chakra-ui/react";
import Play from "../assets/play-solid.svg";

export default function Word({ word }) {
  // console.log(word);

  function click(e) {}

  console.log(word);

  const getMeanings = () => {
    const meanings = [];
    word.meanings.map((mean) =>
      meanings.push({
        partOfSpeech: mean.partOfSpeech,
        definitions: mean.definitions,
      })
    );
    return meanings;
  };
  // const getPhonetic =() =>
  console.log(getMeanings());

  //  console.log(def.map((x,i) => x))

  return (
    <>
      <Box>
        <Box display="flex"
         justifyContent="space-between"
          p="0.4em 0.4em"
          alignItems='center'>
          <Box>
            <Text fontSize="1.8rem" fontWeight="black">
              {word.word}
            </Text>
            <Text>
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
        {/* Meaning element goes here */}
        {getMeanings().map((meaning) => (
          <Box padding="0.2em">
            <Text>{meaning.partOfSpeech}</Text>
            <Text>Meaning</Text>
            <List>
              {meaning.definitions.map((def) => (
                <ListItem>{def.definition}</ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </>
  );
}
