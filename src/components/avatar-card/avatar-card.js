import React from 'react';
import PropTypes from 'prop-types'

const AvatarCard = (src) => {

    return (
        <div>
            <img src={src.src} alt="avatar" />
        </div>
    );
}

AvatarCard.propTypes = {
    src: PropTypes.string
}

export default AvatarCard;