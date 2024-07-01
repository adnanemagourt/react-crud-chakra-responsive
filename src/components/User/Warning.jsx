import React from 'react'
import { useMediaQuery, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react'

import { AppContext } from '../../Context/context';


export default function Warning() {
    const cancelRef = React.useRef()

    const [isMobile] = useMediaQuery("(max-width: 768px)") 

    const {usersContextDelete, userDeleteId, deleteUser, empty} = React.useContext(AppContext);
    const { isOpen, onOpen, onClose } = usersContextDelete;

    const handleDelete = () => {
        deleteUser(userDeleteId);
        onClose();
        // setUserDeleteId(null);
        empty("userDeleteId");
    }
  
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          Delete User
        </Button>
  
        <AlertDialog
          size={isMobile ? "" : "xl"}
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete User
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }