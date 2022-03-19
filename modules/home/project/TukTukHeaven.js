import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function TukTukHeaven() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Tuk Tuk Heaven"
                cover={<img alt="Tuk Tuk Heaven Home" src="/images/tuktuk/TukTukHeavenHome.png" />}
                description="A small project to practice making single page website"
                onClick={() => handleOpenModal()}
            />
            <Modal visible={modalVisible} title="Pizza Palace" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is also a small project I made after finished a Web Development course. This is a singple page website that was built on
                    HTML, CSS, and Bootstrap. It represents an imagination store that sells tuk tuk. It doesn't have any back-end, it just simply
                    displaying the products, price, and some informations.
                </div>
                <StyledImg alt="Tuk Tuk Heaven Home" src="/images/tuktuk/TukTukHeavenHome.png" />
                <div className="divider" />
                <StyledImg alt="Tuk Tuk Heaven Product" src="/images/tuktuk/TukTukHeavenProducts.png" />
            </Modal>
        </>
    );
}

export default TukTukHeaven;
