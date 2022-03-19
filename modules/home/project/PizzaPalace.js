import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function PizzaPalace() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Pizza Palace"
                cover={<img alt="Pizza Palace Home" src="/images/pizza/PizzaPalaceHome.png" />}
                onClick={() => handleOpenModal()}
                description="A small project to get to know HTML, CSS, Bootstrap, and PHP"
            />
            <Modal visible={modalVisible} title="Pizza Palace" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is a small project I made after finished a Web Development course at Camosun. It just a simple website that used HTML, CSS,
                    Bootstrap, PHP, and Google Map plugin to represent a random pizza website that doesn't exist. The website's back-end is running on
                    PHP and it could handle the pizza ordering process but you will never receive your pizza.
                </div>
                <StyledImg alt="Pizza Palace Home" src="/images/pizza/PizzaPalaceHome.png" />
                <div className="divider" />
                <StyledImg alt="Pizza Palace Menu" src="/images/pizza/PizzaPalaceMenu.png" />
                <div className="divider" />
                <StyledImg alt="Pizza Palace Order" src="/images/pizza/PizzaPalaceOrder.png" />
            </Modal>
        </>
    );
}

export default PizzaPalace;
