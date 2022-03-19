import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledProgress = styled.div`
    display: flex;
    height: 7px;
`;

const StyledProcessCompleted = styled.div`
    border-radius: 25px;
    width: 40px;
    margin-right: 5px;
    background-color: #000000;
`;

const StyledProcessNotCompleted = styled.div`
    border-radius: 25px;
    width: 40px;
    margin-right: 5px;
    background-color: #bfbfbf;
`;

function ProgressBar({ completedSteps, totalSteps = 5 }) {
    const stepsArr = [];

    for (let i = 1; i <= completedSteps; i += 1) {
        stepsArr.push(<StyledProcessCompleted />);
    }

    for (let i = 1; i <= totalSteps - completedSteps; i += 1) {
        stepsArr.push(<StyledProcessNotCompleted />);
    }

    return <StyledProgress>{stepsArr.map(step => step)}</StyledProgress>;
};

ProgressBar.propTypes = {
    completedSteps: PropTypes.number,
    totalSteps: PropTypes.number
};

ProgressBar.defaultProps = {
    completedSteps: 0,
    totalSteps: 5
};

export default ProgressBar;
