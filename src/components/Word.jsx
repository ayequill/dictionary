import { Box, Button, Text, List, ListItem, UnorderedList } from "@chakra-ui/react";
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
          <Box py='1.2em'>
            <Text fontSize="2rem" fontWeight="black">
              {word.word}
            </Text>
            <Text color='purple.400'>
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
          <Box py={3} px={1} boxShadow='sm' borderRadius='md'>
            <Text fontStyle='italic' mb={3} >{meaning.partOfSpeech}</Text>
            <Text opacity='0.4' mb='6'>Meaning</Text>
            <UnorderedList pl={5}>
              {meaning.definitions.map((def) => (
                <ListItem py={1}>{def.definition}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Box>
    </>
  );
}
