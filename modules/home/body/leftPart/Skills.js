import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProgressItem } from '@core/components';

const StyledWrapper = styled.div`
    margin-top: 30px;

    .skill-title {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

function Skills({ skills }) {
    return (
        <StyledWrapper id="skills">
            <div className="skill-title">Skills</div>

            {skills.map((item) => <ProgressItem item={item} />)}
        </StyledWrapper>
    );
};

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Skills;
