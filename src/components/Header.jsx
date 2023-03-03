import { Box, Image } from '@chakra-ui/react'
import book from '../assets/book-solid.svg'

export default function Header () {
    return (
        <>
        <Box p={'0.5em'}
        boxShadow='0px 1px #f5f5f5'
        >
            <Image 
            src={book} 
            maxWidth='100'
            w='1.5em'
            >
            </Image>
        </Box>
        </>
    )
}