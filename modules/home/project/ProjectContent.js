import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StyledSection } from '@core/components';

import Capstone from './Capstone';
import ThinkFood from './ThinkFood';
import PizzaPalace from './PizzaPalace';
import TukTukHeaven from './TukTukHeaven';
import Pandemic from './Pandemic';
import GameJam from './GameJam';

const StyledRow = styled(Row)`
    display: flex;
    justify-content: center;
`;

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

function ProjectContent() {
    return (
        <StyledSection>
            <div id="projects" className="title">
                Projects
            </div>
            <StyledRow gutter={[0, 48]}>
                <StyledCol sm={24} md={12} xl={8}>
                    <Capstone />
                </StyledCol>
                <StyledCol sm={24} md={12} xl={8}>
                    <ThinkFood />
                </StyledCol>
                <StyledCol sm={24} md={12} xl={8}>
                    <PizzaPalace />
                </StyledCol>
                <StyledCol sm={24} md={12} xl={8}>
                    <TukTukHeaven />
                </StyledCol>
                <StyledCol sm={24} md={12} xl={8}>
                    <Pandemic />
                </StyledCol>
                <StyledCol sm={24} md={12} xl={8}>
                    <GameJam />
                </StyledCol>
            </StyledRow>
        </StyledSection>
    );
}

export default ProjectContent;
