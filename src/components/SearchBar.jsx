import { Box, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import Search from "../assets/searchengin.svg";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState(props.searchWord);
  function click (e) {
    console.log(e)
  }

  // const bg = useColorModeValue('gray.50', 'blackAlpha.800')
  const color = useColorModeValue('blackAlpha.800', 'whiteAlpha.500')

  return (
    <Box py='1em'>
      <InputGroup
      >
        <InputRightElement onClick={(e) => props.getWord(e)} pointerEvents='auto' children='🔍' />
        <Input
        onKeyDown={(e) => props.getWord(e)}
        onChange={(e) => props.getValue(e)}
        placeholder="any word"
        color={color}
        />
        </InputGroup>
    </Box>
  );
}
