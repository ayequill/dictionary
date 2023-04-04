import {
  Box,
  IconButton,
  Text,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { FaPlay } from "react-icons/fa";

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
  const audioUrl = word.phonetics[0].audio ? word.phonetics[0].audio : "";
  const color = useColorModeValue("blackAlpha.800", "whiteAlpha.900");

  const wordAudio = new Audio(audioUrl);
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
            <IconButton
              onClick={() => wordAudio.play()}
              size="lg"
              color="purple.500"
              icon={<FaPlay />}
            />
          </Box>
        </Box>
        <Meanings color={color} word={getMeanings(word)} />
        <Text fontStyle="italic" color={color} mt={10}>
          {word.sourceUrls[0]}
        </Text>
      </Box>
    </>
  );
}

const Meanings = ({ word, color }) => {
  return (
    <>
      {word.map((meaning) => (
        <Box key={nanoid()} py={3} px={1} boxShadow="sm" borderRadius="md">
          <Text fontStyle="italic" mb={3} color={color}>
            {meaning.partOfSpeech}
          </Text>
          <Text opacity="0.4" mb="6" color={color}>
            Meaning
          </Text>
          <UnorderedList pl={5}>
            {meaning.definitions.map((def) => (
              <ListItem key={nanoid()} py={1} color={color}>
                {def.definition}
              </ListItem>
            ))}
          </UnorderedList>
          <Flex gap={5} py={5}>
            <Text opacity="0.4" mb="4" color={color}>
              Synonyms
            </Text>
            <Flex gap={3}>
              {meaning.definitions.map((mean) => {
                return mean.synonyms.map((word) => {
                  return (
                    <Text key={nanoid()} color="purple.400">
                      {word}
                    </Text>
                  );
                });
              })}
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default Word;
