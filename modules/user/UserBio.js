import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LinkedinOutlined } from '@ant-design/icons';

import { getFormattedDate } from '@core/utils';

const StyledBio = styled.div`
    margin-top: 30px;
`;

const StyledTitle = styled.div`
    font-weight: bold;
    margin-top: 10px;
`;

function UserBio({ profile }) {
    return (
        <StyledBio id="bio">
            <div id="social">
                <LinkedinOutlined />
                &nbsp;
                <a href="https://www.linkedin.com/in/brian25/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </div>
            <StyledTitle>Date / Place of birth</StyledTitle>
            <div>
                {getFormattedDate(profile.dob)}, {profile.pob}
            </div>
            <StyledTitle>Nationality</StyledTitle>
            <div>{profile.nationality}</div>
        </StyledBio>
    );
}

UserBio.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default UserBio;
