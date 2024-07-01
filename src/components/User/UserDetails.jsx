import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery, Spinner, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Flex, Avatar, Heading, Text, Box, Stack, StackDivider } from '@chakra-ui/react'

import { AppContext } from '../../Context/context';



const UserDetails = () => {
    const btnRef = React.useRef()

    const [isMobile] = useMediaQuery("(max-width: 768px)") 

    const { usersContextDetails, userDetailId, getOneUser, shownUser, empty } = useContext(AppContext);
    const { isOpen, onClose } = usersContextDetails;
    const user_id = userDetailId;
    const user = shownUser;

    const close = () => {
        onClose();
        empty("shownUser");
        empty("userDetailId");
    }

    useEffect(() => {
        getOneUser(user_id);
    }, [])

    if (!user) return (
        <Drawer
            size={isMobile ? "full" : "sm"}
            isOpen={isOpen}
            placement='right'
            onClose={close}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent >
                <Spinner size={'xl'} />
            </DrawerContent>
        </Drawer>
    )


    return (<Drawer 
        size={isMobile ? "full" : "sm"}
        isOpen={isOpen}
        placement='right'
        onClose={close}
        finalFocusRef={btnRef}
    >
        <DrawerOverlay />
        <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={user.username} src={user.avatar} />

                    <Box>
                        <Heading>{user.username}</Heading>
                        <Text>{user.email}</Text>
                    </Box>
                </Flex>
            </DrawerHeader>

            <DrawerBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Created At
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {user.createdAt}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            City
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {user.city}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Birthday
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {user.birthday}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Favorite color
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {user.favcolor}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Currency
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {user.currency}
                        </Text>
                    </Box>
                </Stack>
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>)

}

export default UserDetails

