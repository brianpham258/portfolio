import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getFormattedMonth } from '@core/utils';

const StyledWrapper = styled.div`
    margin-bottom: 40px;
`;

const StyledTitle = styled.div`
    font-weight: bold;
`;

const StyledDescription = styled.div`
    font-style: italic;
`;

const StyledTable = styled(Table)`
    margin-top: 10px;
    overflow: scroll;
`;

const StyledSection = styled.div`
    margin-bottom: 15px;
`;

function Experience({ experience, tableData }) {
    const { columns, dataSource } = tableData;
    return (
        <StyledWrapper>
            <StyledTitle>
                {experience.role} at {experience.company}
            </StyledTitle>
            <StyledSection>
                {getFormattedMonth(experience.duration.from)} - {getFormattedMonth(experience.duration.to)}
            </StyledSection>
            <StyledSection>
                <StyledDescription>Description:</StyledDescription>
                <div>
                    {experience?.description?.map((item) => (
                        <div>- {item}</div>
                    ))}
                </div>
            </StyledSection>
            <StyledSection>
                <StyledDescription>Responsibilities:</StyledDescription>
                <div>
                    {experience?.responsibilities?.map((item) => (
                        <div>- {item}</div>
                    ))}
                </div>
            </StyledSection>
            <StyledSection>
                <StyledDescription>Technology used:</StyledDescription>
                <StyledTable columns={columns} dataSource={dataSource} pagination={false} />
            </StyledSection>
        </StyledWrapper>
    );
}

Experience.propTypes = {
    experience: PropTypes.object.isRequired,
    tableData: PropTypes.object.isRequired,
};

export default Experience;
