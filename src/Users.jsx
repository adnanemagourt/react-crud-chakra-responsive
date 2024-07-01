import React, { useContext } from 'react'
import { Input, SimpleGrid, Spinner, Button } from '@chakra-ui/react';

import { AppContext } from './Context/context'
import UserCard from './components/User/UserCard';
import UserDetails from './components/User/UserDetails';
import UserEdit from './components/User/UserEdit';
import Warning from './components/User/Warning';
import Pagination from './components/User/Pagination';
import UserCreate from './components/User/UserCreate';
import PaginationChakra from './components/User/PaginationChakra';

const Users = () => {

    const { searchTerm, currentUsers, usersContextCreate, usersContextDetails, usersContextUpdate, usersContextDelete, search } = useContext(AppContext);

    const handleSearch = (e) => {
        search(e.target.value);
    }

    if (!currentUsers) {
        return <Spinner size={'xl'} />
    }

    return (<>
        
        <div className="top">
        <Input placeholder='search...' size='md' width="md" value={searchTerm} onChange={handleSearch} />
        <Button onClick={usersContextCreate.onOpen} className='add' data-toggle="modal"><span>Add New User</span></Button>
        </div>

        <SimpleGrid templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}>
            {Object.values(currentUsers)
                .map((user) =>
                    <UserCard key={user.id} user={user} />
                )
            }
        </SimpleGrid>
        <div className="bottom">
        <PaginationChakra />
        </div>
        {/* <Pagination/> */}
        {usersContextDetails.isOpen ? (<UserDetails />) : null}
        {usersContextUpdate.isOpen ? (<UserEdit />) : null}
        {usersContextDelete.isOpen ? (<Warning />) : null}
        {usersContextCreate.isOpen ? (<UserCreate />) : null}
    </>)

}

export default Users