import { createContext, useEffect, useReducer } from 'react';
import {usePagination} from '@ajna/pagination';

import reducer from './reducer';
import { useDisclosure } from '@chakra-ui/react';


const API = "https://666b0d847013419182d2132e.mockapi.io/api/v1/skills";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        title: null,
        name: null,
        image: null,
        services: null,
        users: null,
        nbrUsers: null,
        searchTerm: '',
        searchResults: null,
        currentUsers: null,
        userDetailId: null,
        userUpdateId: null,
        userDeleteId: null,
        shownUser: null,
        currentPage: 1,
        usersPerPage: 6,
        totalPagesNum: null,
        nextId: null,
    };


    const [state, dispatch] = useReducer(reducer, initialState);
    const usersContextDetails = useDisclosure();
    const usersContextUpdate = useDisclosure();
    const usersContextDelete = useDisclosure();
    const usersContextCreate = useDisclosure();

    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages,
        setPageSize
    } = usePagination({
        initialState: { currentPage: 1, pageSize: 6 },
    });

    const paginationCst = {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages,
        setPageSize
    }

    // 


    

    const search = (searchTerm) => {
        dispatch({ type: "SEARCH", payload: searchTerm });
        paginate({currentPage: 1, usersPerPage: state.usersPerPage});
    }

    const paginate = ({currentPage, usersPerPage}) => {
        dispatch({ type: "PAGINATE", payload: {currentPage, usersPerPage} });
    }
    


    // 


    const updateHomePage = () => {
        return dispatch(
            {
                type: "UPDATE_HOME_PAGE",
                payload: {
                    title: "Adnane AIT MAGOURT",
                    name: "Adnane AIT MAGOURT",
                    image: "./images/hero.svg",
                }
            }
        );
    }

    const updateAboutPage = () => {
        return dispatch(
            {
                type: "UPDATE_ABOUT_PAGE",
                payload: {
                    title: "About Me",
                    name: "Adnane AIT MAGOURT",
                    image: "./images/about1.svg",
                }
            }
        );
    }

    const getServices = async (url) => {
        try {
            const res = await fetch(url, { method: "GET" });
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getServices(API);
        getAllUsers();
    }, []);

    // useEffect(() => {
    //     console.log(state.users)
    //     search(state.searchTerm);
    // }, [state.users]);

    // new page

    const createUser = (createdUser) => {
        createdUser.id = state.NextId;
        createdUser.createdAt = new Date().toISOString();

        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createdUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.id) {
                    dispatch({ type: "CREATE_USER", payload: data })
                    search(state.searchTerm);
                }
            })
    };



    const updateUser = (updatedUser) => {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + updatedUser.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: "UPDATE_USER", payload: updatedUser })
                search(state.searchTerm);
            })
    }



    const deleteUser = (user_id) => {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + user_id, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: "DELETE_USER", payload: user_id })
                search(state.searchTerm);
            })
    };


    const getAllUsers = () => {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("-")
                console.log(data);
                dispatch({ type: "GET_ALL_USERS", payload: data })
                console.log(state.users)
                search(state.searchTerm);
            })
    }


    const getOneUser = (user_id) => {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + user_id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: "GET_ONE_USER", payload: data })
            })
    }

    const setUserDetailId = (user_id) => {
        dispatch({ type: "USER_DETAIL_ID", payload: user_id })
    }

    const setUserUpdateId = (user_id) => {
        dispatch({ type: "USER_UPDATE_ID", payload: user_id })
    }

    const setUserDeleteId = (user_id) => {
        dispatch({ type: "USER_DELETE_ID", payload: user_id })
    }

    const empty = (prop) => {
        console.log("empty");
        dispatch({ type: "EMPTY", payload: prop })
    }

    return <AppContext.Provider value={{ ...state, usersContextDetails, usersContextCreate, usersContextUpdate, usersContextDelete, updateHomePage, updateAboutPage, createUser, updateUser, deleteUser, getAllUsers, getOneUser, setUserDetailId, setUserUpdateId, setUserDeleteId, empty, search, paginate, paginationCst }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
