import { Box, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

// import { useState } from "react";
// import Search from "../assets/searchengin.svg";

export default function SearchBar({getWord, getValue}) {

  // const bg = useColorModeValue('gray.50', 'blackAlpha.800')
  const color = useColorModeValue('blackAlpha.800', 'whiteAlpha.500')

  return (
    <Box py='1em'>
      <InputGroup
      >
        <InputRightElement id="search" onClick={(e) => getWord(e)} pointerEvents='auto' children={<SearchIcon color='purple.400' />} />
        <Input
        onKeyDown={(e) => getWord(e)}
        onChange={(e) => getValue(e)}
        placeholder="Search"
        color={color}
        />
        </InputGroup>
    </Box>
  );
}
