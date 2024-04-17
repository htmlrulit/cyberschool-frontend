import React from 'react';
import { Panel, Div } from '@vkontakte/vkui';
import TestTab from '../components/tests/TestTab.jsx';
import ProfileTab from '../components/ProfileTab';
import TrainingTab from "../components/TrainingTab";

const Home = ({ id, activeTab, openModal, showSnackbar }) => {
    return (
        <Panel id={id}>
            <Div style={{ paddingBottom: 56 }}>
                {activeTab === 'training' && <TrainingTab id="training" openModal={openModal}/>}
                {activeTab === 'tests' && <TestTab id="tests" openModal={openModal}/>}
                {activeTab === 'profile' && <ProfileTab id="profile" openModal={openModal} showSnackbar={showSnackbar}/>}
            </Div>
        </Panel>
    );
}

export default Home;
