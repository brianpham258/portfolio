import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import Link from 'next/link';

import { HEADER_ITEMS } from './constants';
import TopNavDesktop from './TopNavDesktop';
import TopNavMobile from './TopNavMobile';
import ScrollToTop from './ScrollToTop';

function PageLayout({ children }) {
    const menu = (
        <Menu mode="horizontal">
            {HEADER_ITEMS.map((item) => (
                <Menu.Item key={item.key}>
                    <Link href={item.tag}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <>
            <TopNavDesktop menu={menu} />
            <TopNavMobile menu={menu} />
            <ScrollToTop />

            <div>{children}</div>
        </>
    );
};

PageLayout.propTypes = {
    children: PropTypes.any
};

PageLayout.defaultProps = {
    children: undefined
};

export default PageLayout;
