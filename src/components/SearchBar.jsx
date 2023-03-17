import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import Search from "../assets/searchengin.svg";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState(props.searchWord);


  return (
    <Box>
      <InputGroup
      >
        <InputRightElement pointerEvents='none' children='🔍' />
        <Input
        onKeyDown={(e) => props.getWord(e)}
        onChange={(e) => props.getValue(e)}
        placeholder="any word"
        />
        </InputGroup>
    </Box>
  );
}
