import React, { useEffect, useState } from 'react';
import AvatarCard from '../../components/avatar-card/avatar-card';
import { useLocation } from 'react-router-dom';
import InfoCard from '../../components/info-card/info-card';
import { getUser } from '../../services/api-services/user-service';
import SubLayout from '../../layouts/sub/sub-layout';

const UserInfo = () => {

    const initialUserData = {
        data: {
            avatar: "",
            email: "",
            first_name: "",
            id: 2,
            last_name: ""
        }
    };

    const location = useLocation();

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        getUser(location.state.id)
            .then((response) => {
                if (response.data) {
                    let _data = userData.data;
                    _data["id"] = response.data.data.id;
                    _data["email"] = response.data.data.email;
                    _data["first_name"] = response.data.data.first_name;
                    _data["last_name"] = response.data.data.last_name;
                    _data["avatar"] = response.data.data.avatar;
                    userData.data = _data;
                    setUserData({ ...userData });
                } else {
                    alert("Data fetching error!", "An error occered while fetching data. Please try again relading the page.");
                }
            })
            .catch((error) => {
                alert("Data fetching error!", "An error occered while fetching data. Please try again relading the page.");
            })
    }, [location.state.id]);

    return (
        <SubLayout>
            <div>User information page</div>
            <AvatarCard src={userData.data.avatar} />
            <InfoCard data={userData.data} />
        </SubLayout>
    );
}

export default UserInfo;