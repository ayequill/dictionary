import { Box, Button, Text,List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,} from "@chakra-ui/react";
import Play from "../assets/play-solid.svg";

export default function Word({ word }) {
  // console.log(word);

  function click(e) {
    console.log(e);
  }
 const def = word.meanings.map(x => x.definitions)
const arr = []

console.log(arr.concat(def.map(x => x)))
// console.log(def)



//  console.log(def.map((x,i) => x))

  return (
    <>
      <Box>
        <Box>
          <Box>
            <Text>{word.word}</Text>
            <Text>
              {word.phonetic ? word.phonetic : word.phonetics[0].text}
            </Text>
            {word.meanings.map((meaning, i) => (<Text key={i}>{meaning.partOfSpeech}</Text>))}
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
        <Box>
            <Text>Meaning</Text>
            <UnorderedList>
                {<List></List>}
            </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
