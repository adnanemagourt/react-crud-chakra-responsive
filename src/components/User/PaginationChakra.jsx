import React, { useContext } from "react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from "@chakra-ui/react";
import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
} from "@ajna/pagination";

import { AppContext } from '../../Context/context';


const PaginationChakra = () => {

    const { paginationCst, nbrUsers, currentPage: currentPageMe, usersPerPage, totalPagesNum, paginate } = useContext(AppContext);

    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages,
        setPageSize
    } =
    //  paginationCst;
    usePagination({
        total: nbrUsers,
        initialState: { currentPage: currentPageMe, pageSize: usersPerPage },
    });

    const handlePageChange = (page) => {
        setCurrentPage(page)
        paginate({ currentPage: page, usersPerPage: usersPerPage });
    }

    const handleNumberInput = (value) => {
        setPageSize(value);
        paginate({ currentPage: currentPage, usersPerPage: value });
    }

    const chooseUsersPerPage =
        <NumberInput size='xs' maxW={16} value={usersPerPage} min={5} onChange={handleNumberInput}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

    let show = []
    // console.log(totalPagesNum)
    for (let page = 1; page <= totalPagesNum; page++) {
        show.push(
            <PaginationPage
                key={`pagination_page_${page}`}
                page={page}

                w={7}
                bg="red.300"
                fontSize="sm"
                _hover={{
                    bg: "green.300"
                }}
                _current={{
                    w: 7,
                    bg: "green.300",
                    fontSize: "sm",
                    _hover: {
                        bg: "blue.300"
                    },
                }}
            />

        )
    }


    return (
        <div className="clearfix">

            <div className="hint-text">Showing {chooseUsersPerPage} out of <b>{nbrUsers}</b> entries</div>

            <div className="pagination">
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPageMe}
                    onPageChange={handlePageChange}
                >
                    <PaginationContainer>
                        <PaginationPrevious>Previous</PaginationPrevious>
                        <PaginationPageGroup>
                            {show}
                        </PaginationPageGroup>
                        <PaginationNext>Next</PaginationNext>
                    </PaginationContainer>
                </Pagination>
            </div>
        </div>
    );
};

export default PaginationChakra;