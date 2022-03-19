import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
    margin-bottom: 20px;
    width: 100%;
`;

function StyledImg({ src, alt, otherProps }) {
    return <StyledImage src={src} alt={alt} {...otherProps} />
};

StyledImg.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    otherProps: PropTypes.object
};

StyledImg.defaultProps = {
    alt: '',
    otherProps: {}
};

export default StyledImg;