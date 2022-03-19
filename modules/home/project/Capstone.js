import React, { useState } from 'react';
import { Modal } from 'antd';

import { CustomCard, StyledImg } from '@core/components';

function Capstone() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <>
            <CustomCard
                title="Capstone Project"
                description="A web application that uses for managing videos"
                cover={<img alt="Capstone Home" src="images/capstone/CapstoneHome.png" />}
                onClick={() => handleOpenModal()}
            />
            <Modal visible={modalVisible} title="Capstone Project" onCancel={handleCloseModal} footer={null}>
                <div>
                    This is my capstone project, which me and two other classmates have just finished this August of 2020. This is, so far, my biggest
                    and most professional project. In this project, I was responsible for all of the front-end tasks.
                </div>
                <StyledImg alt="Capstone Home" src="/images/capstone/CapstoneHome.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Video Details" src="images/capstone/CapstoneVideoDetails.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Playlists" src="/images/capstone/CapstonePlaylists.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Playlist Videos" src="images/capstone/CapstonePlaylistVideos.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Categories" src="/images/capstone/CapstoneCategories.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Curation" src="/images/capstone/CapstoneCuration.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Users" src="/images/capstone/CapstoneUsers.png" />
                <div className="divider" />
                <StyledImg alt="Capstone Profile" src="/images/capstone/CapstoneProfile.png" />
            </Modal>
        </>
    );
}

export default Capstone;
