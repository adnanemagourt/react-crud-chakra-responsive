import React, { useEffect, useContext, useState } from 'react'
import { useMediaQuery, FormControl, FormLabel, Button, Input, Spinner, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'

import { AppContext } from '../../Context/context'


const UserCreate = () => {
  const btnRef = React.useRef()

  const emptyUser = {
    username: '',
    email: '',
    city: '',
    birthday: '',
    favcolor: '',
    currency: '',
    password: '',
  }

  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  const { usersContextCreate, createUser } = useContext(AppContext);
  const { isOpen, onClose } = usersContextCreate;
  const [user, setUser] = useState(emptyUser);



  const handleSubmit = () => {
    createUser(user);
    onClose();
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const reset = () => {
    setUser(emptyUser);
  }

  return (
    <>
      <Drawer
        size={isMobile ? "full" : "sm"}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form action="" onSubmit={handleSubmit} method="post">
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input onChange={handleChange} name='username' placeholder='First name' value={user.username} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleChange} name='email' placeholder='First name' value={user.email} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input onChange={handleChange} name='city' placeholder='First name' value={user.city} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Birthday</FormLabel>
                <Input onChange={handleChange} name='birthday' placeholder='First name' value={user.birthday} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Favorite color</FormLabel>
                <Input onChange={handleChange} name='favcolor' placeholder='First name' value={user.favcolor} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Currency</FormLabel>
                <Input onChange={handleChange} name='currency' placeholder='First name' value={user.currency} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input onChange={handleChange} name='password' placeholder='First name' value={user.password} />
              </FormControl>

            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='outline' mr={3} onClick={reset}>
              Reset
            </Button>
            <Button onClick={handleSubmit} colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )

}

export default UserCreate

