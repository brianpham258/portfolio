import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';

const StyledProgressItem = styled.div`
    margin-bottom: 20px;

    .name {
        margin-bottom: 5px;
    }
`;

function ProgressItem({ item }) {
    return (
        <StyledProgressItem>
            <div className="name">{item.name}</div>
            <ProgressBar completedSteps={item.completedSteps} />
        </StyledProgressItem>
    );
}

ProgressItem.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProgressItem;
