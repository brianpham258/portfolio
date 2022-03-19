import React from 'react';
import styled from 'styled-components';

import { USER_PROFILE } from './constants';
import HeadingContent from './heading/HeadingContent';
import BodyContent from './body/BodyContent';
import ProjectContent from './project/ProjectContent';

const StyledBodyWrapper = styled.div`
    a:link {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:visited {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:hover {
        color: #4caf50 !important;
        text-decoration: underline !important;
    }
    a:active {
        color: #bfbfbf !important;
        text-decoration: underline !important;
    }

    @media (min-width: 576px) {
        margin-top: 45px;
    }
`;

const StyledSection = styled.div`
    margin: 3% 5%;
`;

function HomeContentContainer() {
    return (
        <StyledBodyWrapper className="container">
            <HeadingContent profile={USER_PROFILE} />
            <BodyContent profile={USER_PROFILE} />

            <StyledSection>
                <div className="divider" />
                <ProjectContent />
            </StyledSection>
        </StyledBodyWrapper>
    );
}

export default HomeContentContainer;
