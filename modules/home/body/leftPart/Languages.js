import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProgressItem } from '@core/components';

const StyledWrapper = styled.div`
    margin-top: 30px;

    .language-title {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

function Languages({ languages }) {
    return (
        <StyledWrapper id="languages">
            <div className="language-title">Languages</div>
            
            {languages.map((item) => <ProgressItem item={item} />)}
        </StyledWrapper>
    );
};

Languages.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Languages;
