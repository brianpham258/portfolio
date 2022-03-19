import React from 'react';
import PropTypes from 'prop-types';

import { StyledSection } from '@core/components';

import Experience from './Experience';

function UserExperiences({ experience }) {
    const columns = [
        { title: 'Operating Systems', dataIndex: 'os', key: 'os', render: (data) => data.map((item) => <div>- {item}</div>) },
        { title: 'Development Tools', dataIndex: 'tools', key: 'tools', render: (data) => data.map((item) => <div>- {item}</div>) },
        { title: 'Programming Languages', dataIndex: 'languages', key: 'languages', render: (data) => data.map((item) => <div>- {item}</div>) },
        { title: 'Frameworks and Libraries', dataIndex: 'libraries', key: 'libraries', render: (data) => data.map((item) => <div>- {item}</div>) },
    ];

    return (
        <StyledSection>
            <div id="experiences" className="title">Experiences</div>
            {experience?.map((item) => {
                const tableData = {
                    columns,
                    dataSource: [item.technologies]
                };
                return <Experience experience={item} tableData={tableData} />;
            })}
        </StyledSection>
    );
}

UserExperiences.propTypes = {
    experience: PropTypes.array,
};

UserExperiences.defaultProps = {
    experience: [],
};

export default UserExperiences;
