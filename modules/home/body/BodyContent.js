import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { UserBio } from '@user';

import { USER_SKILLS, USER_LANGUAGES, EXPERIENCES } from '../constants';
import { Skills, Languages } from './leftPart';
import { Profile, Education, UserExperiences, FutureGoals } from './rightPart';

const StyledRow = styled(Row)`
    margin: 3% 5%;

    @media (max-width: 767px) {
        #left-part {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
`;

function BodyContent({ profile }) {
    return (
        <StyledRow gutter={[0, 48]}>
            <Col id="left-part" xs={24} md={11} lg={10} xl={{ offset: 1, span: 9 }} xxl={6}>
                <UserBio profile={profile} />
                <Skills skills={USER_SKILLS} />
                <Languages languages={USER_LANGUAGES} />
            </Col>
            <Col id="right-part" xs={24} md={13} lg={14} xxl={17}>
                <Profile profile={profile} />
                <Education education={profile.education} />
                <UserExperiences experience={EXPERIENCES} />
                <FutureGoals goals={profile.future_goals} />
            </Col>
        </StyledRow>
    );
}

BodyContent.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default BodyContent;
