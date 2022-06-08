import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate('/user', { state: { ...user } }) }}>
            <img src={user.avatar} alt="avatar" />
            <div>
                <div>{user.first_name + "\t"} {user.last_name + "\t"}</div>
                <div>{user.email}</div>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    user: PropTypes.object,
}

export default UserCard;