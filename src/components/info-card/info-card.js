import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

const InfoCard = ({data}) => {
    
    return (
        <div>
            <div>{data.first_name} {"\t"} {data.last_name}</div>
            <div>{data.email}</div>
        </div>
    );
}

InfoCard.propTypes = {
    data: PropTypes.object
}

export default InfoCard;