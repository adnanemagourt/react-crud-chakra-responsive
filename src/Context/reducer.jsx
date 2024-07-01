import _ from 'underscore';

const reducer = (state, action) => {
    if (action.type === "UPDATE_HOME_PAGE") {
        return {
            ...state,
            title: action.payload.title,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if (action.type === "UPDATE_ABOUT_PAGE") {
        return {
            ...state,
            title: action.payload.title,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if (action.type === "GET_SERVICES") {
        return {
            ...state,
            services: action.payload,
        };
    }

    // new page

    if(action.type === "GET_ALL_USERS"){
        const sorted = action.payload.sort((a, b) => a.username > b.username ? 1 : -1);
        console.log(sorted)
        const lusers = idOutside(sorted);
        return{
            ...state,
            users: lusers,
            nbrUsers: _.size(sorted),
            nextId: Math.max(Object.keys(lusers)) + 1,
        }
    }

    if (action.type === "GET_ONE_USER"){
        return{
            ...state,
            shownUser: action.payload
        }
    }

    
    if (action.type === "CREATE_USER"){
        const createdUser = {};
        createdUser[createdUser.id] = action.payload;

        return{
            ...state,
            users: {...state.users, ...createdUser},
            nbrUsers: state.nbrUsers + 1,
            nextId: state.nextId + 1,
        }
    }
    
    if (action.type === "UPDATE_USER"){
        const updatedUser = action.payload;
        const updatedUsers = {...state.users};
        updatedUsers[updatedUser.id] = updatedUser;
        return{
            ...state,
            users: updatedUsers
        }
    }

    if (action.type === "DELETE_USER"){
        const user_id = action.payload;
        const updatedUsers = {...state.users};
        delete updatedUsers[user_id];
        return{
            ...state,
            users: updatedUsers,
            nbrUsers: state.nbrUsers - 1,
        }
    }

    if(action.type === "USER_DETAIL_ID"){
        return{
            ...state,
            userDetailId: action.payload,
        }
    }

    if(action.type === "USER_UPDATE_ID"){
        return{
            ...state,
            userUpdateId: action.payload,
        }
    }

    if(action.type === "USER_DELETE_ID"){
        return{
            ...state,
            userDeleteId: action.payload,
        }
    }

    if(action.type === "EMPTY"){
        const theEmpty = {...state};
        theEmpty[action.payload] = null;
        return theEmpty;
    }

    if(action.type === "SEARCH" ){
        const searchResult = searchIn(state.users, action.payload);
        const totalPagesNum = Math.ceil(_.size(searchResult) / state.usersPerPage);
        return{
            ...state,
            searchResults: searchResult,
            totalPagesNum: totalPagesNum,
            searchTerm: action.payload,
            currentPage: 1,
            paginationCst:{
                ...state.paginationCst,
                currentPage: 1,
            }
        }
    }

    if(action.type === "PAGINATE"){
        const {currentPage, usersPerPage} = action.payload;
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = Object.fromEntries(Object.entries(state.searchResults).slice(indexOfFirstUser, indexOfLastUser));
        const totalPagesNum = Math.ceil(_.size(state.searchResults) / usersPerPage);

        return{
            ...state,
            currentUsers: currentUsers,
            currentPage: currentPage,
            usersPerPage: usersPerPage,
            totalPagesNum: totalPagesNum,
        }
    }

    return state;
}

function idOutside(arr){
    let result = {};
    result = Object.fromEntries(
        arr.map((user) => [user.id, user])
    )
    return result;
}

function searchIn(obj, search){
    const inter = Object.entries(obj).filter(([_, user]) => user.username.toLowerCase().includes(search.toLowerCase()));
    return Object.fromEntries(inter);
}


export default reducer;