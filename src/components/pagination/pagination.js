import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Col, Container, FormText, Navbar, Row } from 'react-bootstrap';
import styles from './styles';

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
        <Navbar style={styles.toolBar}>
            <Container>
                <Col sx={4} md={8} lg={9}>
                </Col>
                <Col sx={8} md={4} lg={3}>
                    <FormText >page: {pageInfo.page} of {pageInfo.total_pages}</FormText>
                    <Button disabled={pageInfo.page === 1} onClick={onPrevClick} style={styles.paginationButton}>prev</Button>
                    <Button disabled={pageInfo.page === pageInfo.total_pages} onClick={onNextClick} style={styles.paginationButton}>next</Button>
                </Col>
            </Container>
        </Navbar>
    );
}

Pagination.propTypes = {
    pageInfo: PropTypes.object,
    setInfo: PropTypes.func,
}

export default Pagination;