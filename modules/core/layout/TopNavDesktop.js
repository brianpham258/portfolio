import React, { useEffect } from 'react';
import { Affix } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: top 0.5s;
`;

let previousScrollPos = typeof window !== 'undefined' ? window.pageYOffset : null;

function TopNavDesktop({ menu }) {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (previousScrollPos > currentScrollPos) {
            document.getElementById('top-nav').style.top = '0';
        } else {
            document.getElementById('top-nav').style.top = '-60px';
        }
        previousScrollPos = currentScrollPos;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <StyledNav id="top-nav" className="hidden visible-sm">{menu}</StyledNav>;
}

TopNavDesktop.propTypes = {
    menu: PropTypes.object.isRequired
};

export default TopNavDesktop;
