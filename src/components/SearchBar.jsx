import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBar (props) {

    const [searchValue, setSearchValue] = useState(props.searchWord)


    return (
        <Box>
            <Input onKeyDown={(e) => props.getWord(e)} onChange={(e) =>props.getValue(e)}  placeholder='any word' />
        </Box>
    )
}