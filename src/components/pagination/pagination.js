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
            <text>{pageInfo.per_page} : {pageInfo.total}</text>
            <button disabled={pageInfo.page === pageInfo.total_pages} onClick={onNextClick}>next</button>
            <text>support : {JSON.stringify(pageInfo.support)}</text>
        </div>

    );
}

Pagination.propTypes = {
    pageInfo: PropTypes.object,
    setInfo: PropTypes.func,
}

export default Pagination;