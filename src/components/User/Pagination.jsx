import React, { useState, useEffect, useContext } from 'react';
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"

import { AppContext } from '../../Context/context';

const Pagination = () => {

    const { nbrUsers, currentPage, usersPerPage, totalPagesNum, paginate } = useContext(AppContext);

    const handleNumberInput = (value) => {
        paginate({ currentPage: currentPage, usersPerPage: value });
    }

    const handlePageChange = (page) => {
        paginate({ currentPage: page, usersPerPage: usersPerPage });
    }

    const chooseUsersPerPage = <NumberInput size='xs' maxW={16} value={usersPerPage} min={5} onChange={handleNumberInput}>
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
    </NumberInput>

    // const numOfPages = totalPagesNum;

    const [currentButton, setCurrentButton] = useState(1);

    const pageItems = [];

    console.log(totalPagesNum);

    useEffect(() => {
        handlePageChange(currentButton);
    }, [currentButton]);

    for (let i = 1; i <= totalPagesNum; i++) {
        pageItems.push(
            <li key={i} className={currentButton === i ? 'page-item active' : 'page-item'}
                onClick={() => setCurrentButton(i)}>
                <a href='#' className="page-link">{i}</a>
            </li>
        );
    }

    return (
        <div className="clearfix">
            <div className="hint-text">Showing {chooseUsersPerPage} out of <b>{nbrUsers}</b> entries</div>
            <ul className="pagination">
                <li key={0} className={currentButton === 1 ? 'page-item disabled' : 'page-item'}>
                    <a href='#' onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)} className="page-link">Previous</a>
                </li>
                {pageItems}
                <li key={totalPagesNum + 1} className={currentButton === totalPagesNum ? 'page-item disabled' : 'page-item'}>
                    <a href='#' onClick={() => setCurrentButton((next) => next === totalPagesNum ? next : next + 1)} className="page-link">Next</a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;