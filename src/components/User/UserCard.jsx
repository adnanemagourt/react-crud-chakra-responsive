import React, { useContext } from 'react'
import { Card, CardHeader, CardFooter, Avatar, Flex, Box, Button, Heading, Text } from '@chakra-ui/react'
import { MdEdit, MdInfo, MdDelete } from "react-icons/md";

import { AppContext } from '../../Context/context';
import UserDetails from './UserDetails';

const UserCard = ({ user }) => {

    const { usersContextDetails, usersContextUpdate, usersContextDelete, setUserDetailId, setUserUpdateId, setUserDeleteId } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = usersContextDetails;
    const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = usersContextUpdate;
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = usersContextDelete;


    return <Card margin={"2%"}>
        <CardHeader>
            <Flex flex='1' gap='4' flexWrap='wrap'>
                <Avatar size={"xl"} name={user.username} src={user.avatar} />
                <Box>
                    <Heading>{user.username}</Heading>
                    <Text>{user.email}</Text>
                </Box>
            </Flex>
        </CardHeader>

        <CardFooter
            justify='space-between'
            flexWrap='wrap'
        >
            <Button flex='1' variant='ghost' leftIcon={<MdEdit />}
                onClick={() => {
                    setUserUpdateId(user.id);
                    onOpenUpdate();
                }}>
                Edit
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<MdInfo />}
                onClick={() => {
                    setUserDetailId(user.id);
                    onOpen();
                }}>
                Details
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<MdDelete />}
                onClick={()=>{
                    setUserDeleteId(user.id);
                    onOpenDelete();
                }}>
                Delete
            </Button>
        </CardFooter>
    </Card>
}

export default UserCard