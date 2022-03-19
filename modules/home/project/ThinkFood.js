import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function ThinkFood() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Think Food"
                cover={<img alt="Think Food Home" src="/images/thinkfood/ThinkFoodHome.png" />}
                description="A small project for practice full-stack web development"
                onClick={() => handleOpenModal()}
            />
            <Modal visible={modalVisible} title="Pizza Palace" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is a small project me and my friends made after finished the Web Development course. This is a multiple pages website that
                    was built on HTML, CSS, jQuery, MySQL, and Bootstrap. It represents an online food delivery service that allows users order
                    products online. The back-end was written in PHP and MySQL database. The web app has many functions like add/remove orders, find
                    products, auto recommending products, cart system, and account management.
                </div>
                <StyledImg alt="Think Food Product page" src="/images/thinkfood/ThinkFoodHome.png" />
                <div className="divider" />
                <StyledImg alt="Think Food Product page" src="/images/thinkfood/ThinkFoodProducts.png" />
                <div className="divider" />
                <StyledImg alt="Think Food About page" src="/images/thinkfood/ThinkFoodAbout.png" />
            </Modal>
        </>
    );
}

export default ThinkFood;
