import React, {useState, useEffect, useRef, Suspense} from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAppearance} from '@vkontakte/vk-bridge-react';
import {
  View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol,
  FixedLayout, ModalRoot, ModalCard, Button, Text, Snackbar, Tabbar,
  TabbarItem, Group, Placeholder, Div, ModalPage, ModalPageHeader, usePlatform, useAdaptivityConditionalRender
} from '@vkontakte/vkui';
import { CSSTransition } from 'react-transition-group';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import TestTab from './components/tests/TestTab.jsx';
import ProfileTab from './components/ProfileTab';
import TrainingTab from './components/TrainingTab';
import "./ModalPage.css";
import axios from "axios";
import {
  Icon28CheckCircleFill,
  Icon28CheckCircleOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28UserCircleOutline, Icon56GestureOutline, Icon56NotificationOutline
} from "@vkontakte/icons";

const App = () => {
  const [modalStyle, setModalStyle] = useState({});
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('training');
  const [activePanel, setActivePanel] = useState('home');
  const [activeModal, setActiveModal] = useState(null);
  const [score, setScore] = useState(0);
  const [showResultPage, setShowResultPage] = useState(false);
  const [showTestPage, setShowTestPage] = useState(true);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [view, setView] = useState('training');
  const [showSnackbar, setShowSnackbar] = useState(null);
  const platform = usePlatform();
  const appearance = useAppearance();
  const { sizeX } = useAdaptivityConditionalRender();

  useEffect(() => {
    const checkFirstVisit = () => {
      if (!localStorage.getItem('hasVisited')) {
        setActiveModal('welcome');
        localStorage.setItem('hasVisited', 'true');
      }
    };

    const updateModalPosition = () => {
      if (modalRef.current) {
        const modalHeight = modalRef.current.offsetHeight;
        const topOffset = Math.max((window.innerHeight - modalHeight) / 2, 0);
        setModalStyle({
          top: `${topOffset}px`
        });
      }
    };

    checkFirstVisit();
    window.addEventListener('resize', updateModalPosition);
    updateModalPosition(); // Вызываем при монтировании компонента

    return () => {
      window.removeEventListener('resize', updateModalPosition);
    };
  }, []);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleFinishTraining = async () => {
    const points = 100;
    try {
      const response = await axios.put(`https://htvk.ru:3000/api/user/${userId}/score`, { points });
      const updatedUser = response.data;
      setScore(updatedUser.score);
      openModal('congratulation');
    } catch (error) {
      console.error('Ошибка обновления очков пользователя');
    }
  };

  const handleFinishTest = () => {
    setShowTestPage(false);
    setActiveTab('tests');
  };

  const handleShowSnackbar = (message) => {
    setShowSnackbar(
        <Snackbar
            onClose={() => setShowSnackbar(null)}
            before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
        >
          {message}
        </Snackbar>
    );
  };

  return (
      <ConfigProvider appearance={appearance}>
        <AdaptivityProvider>
          <AppRoot>
            <SplitLayout>
              <SplitCol>
                <View activePanel={activePanel}>
                  <Home id="home" activeTab={activeTab} setActiveTab={setActiveTab} openModal={openModal} showSnackbar={handleShowSnackbar}/>
                  {showTestPage ? (
                      <TestTab id="tests" />
                  ) : (
                      <ResultPage score={score} />
                  )}
                  <TrainingTab id="trainingtab" openModal={openModal} onFinish={handleFinishTraining} />
                  <TestTab id="tests" selectedTraining={selectedTraining} />
                </View>
              </SplitCol>

              {activeModal !== 'welcome' && (
                  <FixedLayout filled vertical="bottom" className="FixedLayout">
                    <Tabbar>
                      <TabbarItem
                          selected={activeTab === 'tests'}
                          onClick={() => {
                            setActiveTab('tests');
                            setView('tests');
                          }}
                          text="Тесты"
                      >
                        <Icon28NewsfeedOutline />
                      </TabbarItem>
                      <TabbarItem
                          selected={activeTab === 'training'}
                          onClick={() => {
                            setActiveTab('training');
                            setView('training');
                          }}
                          text="Обучение"
                      >
                        <Icon28MessageOutline />
                      </TabbarItem>
                      <TabbarItem
                          selected={activeTab === 'profile'}
                          onClick={() => {
                            setActiveTab('profile');
                            setView('profile');
                          }}
                          text="Профиль"
                      >
                        <Icon28UserCircleOutline />
                      </TabbarItem>
                    </Tabbar>
                  </FixedLayout>
              )}
            </SplitLayout>

            {showSnackbar}
            <CSSTransition
                in={activeModal === 'congratulation' && activeTab === 'profile'}
                classNames="modal-animation"
                timeout={300}
                unmountOnExit
            >
              <Suspense fallback={<div>Loading...</div>}>
                <ProfileTab id="profile" showSnackbar={handleShowSnackbar} />
              </Suspense>
            </CSSTransition>

            <ModalRoot activeModal={activeModal} className="ModalRoot">
              <ModalCard
                  id="welcome"
                  onClose={closeModal}
                  icon={<Icon56GestureOutline />}
                  header="Добро пожаловать в КиберШколу!"
                  subheader="«КиберШкола» предлагает широкий спектр тестов по тематике безопасности
                    в Интернете, что позволяет Вам проверять и углублять знания в интересующих вас областях."
                  actions={<React.Fragment>
                    <Button size="l" mode="primary" stretched onClick={closeModal}
                    >Начать обучение</Button>
                  </React.Fragment>}
                  actionsLayout="vertical"
                  style={modalStyle}
                  ref={modalRef}
              />
              <ModalPage
                  id="congratulation"
                  onClose={() => {
                    closeModal();
                    setActiveTab('tests');
                    setView('tests');
                  }}
                  header={
                    <ModalPageHeader>Завершение</ModalPageHeader>
                  }
              >
                <Group>
                  <Div>
                    <center>
                      <Icon28CheckCircleFill width={80} height={80}/>
                    </center>
                  </Div>
                  <Placeholder header={"Поздравляем!"}>Вы успешно прошли курс!</Placeholder>
                  <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Предлагаем Вам закрепить
                    пройденный материал тестированием по данной теме.</Text>
                  <Button size="m" appearance="positive" mode="primary" onClick={() => {
                    closeModal();
                    setActiveTab('tests');
                    setView('tests');
                  }} stretched style={{ marginBottom: '45px', marginTop: "30px" }}>Пройти тесты</Button>

                </Group>
              </ModalPage>
            </ModalRoot>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
  );
};

export default App;
