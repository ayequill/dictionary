import {  Icon, Switch, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import {FaBookOpen} from 'react-icons/fa'

export default function Header () {
    const {toggleColorMode} = useColorMode()
    return (
        <>
        <Flex justifyContent='space-between' px={1} py={5}
        >
            <Icon
            as={FaBookOpen}
            color='purple.500'
            boxSize='1.3em'
            >
            </Icon>
            <Flex gap={1.5}>
            <Switch size='md' onChange={toggleColorMode}/>
            <MoonIcon color='purple.400' boxSize={5} />
            </Flex>
        </Flex>
        </>
    )
}