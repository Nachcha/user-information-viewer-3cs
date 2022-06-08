import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/pagination';
import UserCard from '../../components/user-card/user-card';
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
        <div>Home Page
            {userList.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
            <Pagination
                pageInfo={pageInfo}
                setPage={setPage}
            />
        </div>
    );
}

export default HomePage;