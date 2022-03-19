import { React } from 'react';
import { Card, Tooltip } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Meta } = Card;

const StyledCard = styled(Card)`
    width: 350px;
`;

function CustomCard({ title, description, cover, onClick, hoverable, bordered, ...otherProps }) {
    return (
        <StyledCard
            title={title}
            cover={cover}
            headStyle={{ fontWeight: 'bold' }}
            actions={[
                <Tooltip placement="top" title="More details">
                    <EllipsisOutlined key="ellipsis" onClick={onClick} />
                </Tooltip>,
            ]}
            hoverable={hoverable}
            bordered={bordered}
            {...otherProps}
        >
            <Meta description={description} />
        </StyledCard>
    );
}

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    otherProps: PropTypes.object,
    hoverable: PropTypes.bool,
    bordered: PropTypes.bool,

    onClick: PropTypes.func,
};

CustomCard.defaultProps = {
    otherProps: {},
    hoverable: true,
    bordered: true,

    onClick: () => {},
};

export default CustomCard;
