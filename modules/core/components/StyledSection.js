import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    margin-bottom: 50px;

    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

function StyledSection({ children }) {
    return <StyledDiv>{children}</StyledDiv>;
}

StyledSection.propTypes = {
    children: PropTypes.any,
};

StyledSection.defaultProps = {
    StyledSection: undefined,
};

export default StyledSection;
