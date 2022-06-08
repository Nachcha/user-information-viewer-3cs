import React from 'react';
import { PropTypes } from 'prop-types';

const Pagination = ({ pageInfo, setPage }) => {

    const onNextClick = () => {
        if (pageInfo.page < pageInfo.total_pages) {
            setPage(pageInfo.page + 1);
        }
    }

    const onPrevClick = () => {
        if (pageInfo.page > 1) {
            setPage(pageInfo.page - 1);
        }
    }

    return (
        <div>
            <text>page: {pageInfo.page}</text>
            <text> of {pageInfo.total_pages}</text>
            <button disabled={pageInfo.page === 1} onClick={onPrevClick}>prev</button>
            <button disabled={pageInfo.page === pageInfo.total_pages} onClick={onNextClick}>next</button>
        </div>

    );
}

Pagination.propTypes = {
    pageInfo: PropTypes.object,
    setInfo: PropTypes.func,
}

export default Pagination;