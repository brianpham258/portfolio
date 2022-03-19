import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function GameJam() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Global GameJam 2019"
                cover={<img alt="Game Jam 2019" src="/images/gamejam/GameJam2.png" />}
                onClick={() => handleOpenModal()}
                description="A small 2D game project on Unity written on C#"
            />
            <Modal visible={modalVisible} title="Global GameJam 2019" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is a 2D game project me and my friend made while taking part in the Global Game Jam 2019 event. The game was about a dog got
                    lost and had to find his way to home.
                </div>
                <StyledImg alt="Game Jam 1" src="/images/gamejam/GameJam1.png" />
                <div className="divider" />
                <StyledImg alt="Game Jam 2" src="/images/gamejam/GameJam2.png" />
                <div className="divider" />
                <StyledImg alt="Game Jam 3r" src="/images/gamejam/GameJam3.png" />
            </Modal>
        </>
    );
}

export default GameJam;
