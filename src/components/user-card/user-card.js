import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, FormLabel, Row } from 'react-bootstrap';
import styles from './styles';


const UserCard = ({ user }) => {
    const navigate = useNavigate();
    return (
        <Card style={styles.userCard} >
            <div onClick={() => { navigate('/user', { state: { ...user } }) }}>
                <Card style={styles.frameCard} >
                    <Card style={styles.imageCard} >
                        <img src={user.avatar} alt="avatar" />
                    </Card>
                </Card>
                <div style={{ margin: '20px' }}>
                    <Row>
                        <FormLabel style={styles.nameLabel}>{user.first_name}</FormLabel>
                    </Row>
                    <Row>
                        <FormLabel>{user.email}</FormLabel>
                    </Row>
                </div>
            </div>
        </Card>
    );
}

UserCard.propTypes = {
    user: PropTypes.object,
}

export default UserCard;