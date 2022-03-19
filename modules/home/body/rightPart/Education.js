import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedMonth } from '@core/utils';
import { StyledSection } from '@core/components';

function Education({ education }) {
    return (
        <StyledSection>
            <div id="education" className="title">Education</div>
            <div className="has-text-bold">{education.degree} in {education.program} at {education.college}</div>
            <div>{getFormattedMonth(education.duration.from)} - {getFormattedMonth(education.duration.to)}</div>
        </StyledSection>
    );
};

Education.propTypes = {
    education: PropTypes.object.isRequired
};

export default Education;
