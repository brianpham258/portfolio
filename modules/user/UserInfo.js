import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const StyledName = styled(Title)`
    margin: 20px 0 10px 0;
    color: #fff !important;
`;

const StyledRole = styled(Title)`
    color: #fff !important;
`;

const StyledInfo = styled.div`
    margin: 5px 0;
    font-size: 1.25em;
`;

function UserInfo({ profile }) {
    return (
        <div className="info">
            <StyledName level={1}>
                <div>{profile.name}</div>
                <div>{profile.otherName && `(${profile.otherName})`}</div>
            </StyledName>
            <StyledRole level={3}>{profile.role}</StyledRole>
            <div className="mt-64">
                <StyledInfo level={5}>{profile.location}</StyledInfo>
                <StyledInfo level={5}>{profile.phone}</StyledInfo>
                <StyledInfo level={5}>{profile.email}</StyledInfo>
            </div>
        </div>
    );
}

UserInfo.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default UserInfo;
