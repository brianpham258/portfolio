import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { UserInfo } from '@user';

const StyledRow = styled(Row)`
    background-color: #008060;
    color: white;
`;

const StyledImg = styled.img`
    width: 300px;
    height: 320px;
    margin: 20px;
`;

const StyledCol = styled(Col)`
    text-align: center;

    @media (min-width: 768px) {
        .info {
            text-align: left;
        }
    }
`;

function HeadingContent({ profile }) {
    return (
        <StyledRow>
            <StyledCol xs={24} md={11} lg={10} xxl={8}>
                <StyledImg src="/images/profile/profilePic.jpeg" alt="profile_avatar" />
            </StyledCol>
            <StyledCol xs={24} md={13} lg={14} xxl={16}>
                <UserInfo profile={profile} />
            </StyledCol>
        </StyledRow>
    );
}

HeadingContent.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default HeadingContent;
