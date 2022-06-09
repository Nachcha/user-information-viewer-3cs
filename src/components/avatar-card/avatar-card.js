import React from 'react';
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import styles from './styles';

const AvatarCard = ({ src }) => {

    return (
        <Card style={styles.outterCard}>
            <Card style={styles.innerCard}>
                <img style={styles.avatarImage} src={src} alt="avatar" />
            </Card>
        </Card>
    );
}

AvatarCard.propTypes = {
    src: PropTypes.string
}

export default AvatarCard;