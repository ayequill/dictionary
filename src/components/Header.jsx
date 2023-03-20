import {  Image, Switch, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import book from '../assets/book-solid.svg'

export default function Header () {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <>
        <Flex justifyContent='space-between' px={1} py={5}
        >
            <Image 
            src={book} 
            maxWidth='100'
            w='1.5em'
            >
            </Image>
            <Flex gap={1.5}>
            <Switch size='md' onChange={toggleColorMode}/>
            <MoonIcon boxSize={5} />
            </Flex>
        </Flex>
        </>
    )
}