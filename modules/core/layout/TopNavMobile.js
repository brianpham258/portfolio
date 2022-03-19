import React from 'react';
import { Affix, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledIcon = styled(MenuOutlined)`
    font-size: 25px;
    margin: 10px;
`;

function TopNavMobile({ menu }) {
    return <Affix offsetTop={0} className="hidden-sm">
        <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
                <StyledIcon />
            </a>
        </Dropdown>
    </Affix>;
};

TopNavMobile.propTypes = {
    menu: PropTypes.object.isRequired
};

export default TopNavMobile;
