import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function Pandemic() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Pandemic"
                cover={<img alt="Pandemic" src="/images/pandemic/Pandemic1.png" />}
                onClick={() => handleOpenModal()}
                description="A small 3D game project on Unity written on C#"
            />
            <Modal visible={modalVisible} title="Pandemic" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is a 3D game project me and my friend made when we finished a Game Development course at Camosun. The game was inspirated by
                    the COVID-19 pandemic in 2020. Player will roleplay a police officer going around the city and shoots facemasks to patients in
                    order to cure them and prevent the virus from spreading to the community.
                </div>
                <StyledImg alt="Pandemic 1" src="/images/pandemic/Pandemic1.png" />
                <div className="divider" />
                <StyledImg alt="Pandemic 2" src="/images/pandemic/Pandemic2.png" />
            </Modal>
        </>
    );
}

export default Pandemic;
