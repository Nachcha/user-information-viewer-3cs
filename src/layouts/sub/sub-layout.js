import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SubLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => { navigate(-1) }}>Go Back</button>
            <div>
                {children}
            </div>
        </div>

    );
}

export default SubLayout;