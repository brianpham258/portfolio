import React from 'react';
import PropTypes from 'prop-types';

import { StyledSection } from '@core/components';

function FutureGoals({ goals }) {
    return (
        <StyledSection>
            <div id="future-goals" className="title">Future Goals</div>
            {goals.map((item) => <div>- {item}</div>)}
        </StyledSection>
    );
};

FutureGoals.propTypes = {
    goals: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FutureGoals;
