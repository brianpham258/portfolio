import React from 'react';
import PropTypes from 'prop-types';

import { StyledSection } from '@core/components';

function Profile({ profile }) {
    return (
        <StyledSection>
            <div id="profile" className="title">Profile</div>
            <div>
                {profile.description}
            </div>
        </StyledSection>
    );
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Profile;
