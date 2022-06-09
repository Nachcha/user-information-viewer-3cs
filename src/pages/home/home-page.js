import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from '../../components/pagination/pagination';
import UserCard from '../../components/user-card/user-card';
import MainLayout from '../../layouts/main/main-layout';
import { getUserList } from '../../services/api-services/user-service';

const HomePage = () => {
    const initialPageInfo = {
        page: 0,
        per_page: 0,
        total_pages: 0,
        total: 0,
        support: {}
    }
    const [page, setPage] = useState(1);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if (page) {
            console.log("triggered: ", page);
            getUserList(page)
                .then((response) => {
                    if (response.data) {
                        let data = response.data;
                        setUserList(data.data || []);
                        handlePageInfo(data);
                    } else {
                        alert("Data fetching error!", "An error occered while fetching data. Please try again relading the page.");
                    }
                })
                .catch((error) => {
                    alert("Data fetching error!", "An error occered while fetching data. Please try again relading the page.");
                    setUserList([]);
                })
        }
    }, [page]);

    const handlePageInfo = (info) => {
        let _info = { ...info };
        delete _info.data;
        setPageInfo({ ..._info });
    }

    return (
        <MainLayout
            bottom={<Pagination pageInfo={pageInfo} setPage={setPage} />}
        >
            <div>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        {userList.map((user) => {
                            return (
                                <Col key={user.id} xs={6} md={4} lg={3}>
                                    <UserCard user={user} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </MainLayout>
    );
}

export default HomePage;