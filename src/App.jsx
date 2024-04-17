import React, { useState, useEffect, Suspense } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useAppearance } from '@vkontakte/vk-bridge-react';
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  FixedLayout,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Button,
  Text,
  Snackbar,
  Tabbar,
  TabbarItem, Group, Placeholder, Div, PanelHeaderSubmit
} from '@vkontakte/vkui';
import { CSSTransition } from 'react-transition-group';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import TestTab from './components/tests/TestTab.jsx';
import ProfileTab from './components/ProfileTab';
import TrainingTab from './components/TrainingTab';
import logo from "./logo.png"
import axios from "axios";
import {
  Icon28CheckCircleFill,
  Icon28CheckCircleOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28UserCircleOutline
} from "@vkontakte/icons";

const App = () => {
  const [activeTab, setActiveTab] = useState('training');
  const [activePanel, setActivePanel] = useState('home');
  const [activeModal, setActiveModal] = useState(null);
  const [score, setScore] = useState(0);
  const [showResultPage, setShowResultPage] = useState(false);
  const [showTestPage, setShowTestPage] = useState(true);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [view, setView] = useState('training');
  const [showSnackbar, setShowSnackbar] = useState(null);

  const appearance = useAppearance();

  useEffect(() => {
    const checkFirstVisit = () => {
      if (!localStorage.getItem('hasVisited')) {
        setActiveModal('welcome');
        localStorage.setItem('hasVisited', 'true');
      }
    };

    checkFirstVisit();
    bridge.subscribe(({ detail: { type } }) => {
      if (type === 'VKWebAppUpdateConfig') {
      }
    });
  }, []);

  const openModal = (modalId) => {
    switch (modalId) {
      case 'congratulation':
        setActiveModal(modalId);
        break;
      default:
        console.error('Unknown modal ID');
        break;
    }
  };

  const handleFinishTraining = async () => {
    try {
      const points = 100;
      const response = await axios.put(`http://localhost:3000/api/user/${userId}/score`, { points });
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

  const closeModal = () => {
    setActiveModal(null);
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

                  <ProfileTab id="profile" showSnackbar={showSnackbar} />
                </View>
              </SplitCol>

              <FixedLayout filled vertical="bottom">
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
            </SplitLayout>

            {showSnackbar}
            <CSSTransition
                in={activeModal === 'congratulation'}
                classNames="modal-animation"
                timeout={300}
                unmountOnExit
            >
              <Suspense fallback={<div>Loading...</div>}>
                <ProfileTab id="profile" showSnackbar={handleShowSnackbar} />
              </Suspense>
            </CSSTransition>
            <ModalRoot activeModal={activeModal}>

              <ModalPage
                  id="welcome"
                  settlingWidth={90} // Установка ширины модального окна в процентах от ширины экрана
                  onClose={closeModal}
                  header={
                    <ModalPageHeader>
                      Привет!
                    </ModalPageHeader>
                  }
              >
                <Group>
                  <center>
                    <img width={100} height={100} src={logo} alt="logo" style={{marginTop: "10px"}}></img>
                  </center>
                  <Placeholder>Добро пожаловать в КиберШколу!</Placeholder>
                  <Text style={{marginLeft: "5%"}}>Присоединяйтесь к пользователям, которые уже улучшают свои
                    знания в киберпространстве! КиберШкола предлагает широкий спектр тестов по тематике безопасности
                    в Интернете, что позволяет Вам проверять и углублять знания в интересующих вас областях.</Text>
                  <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Возможности, которые
                    Вы полюбите:</Text>
                  <li style={{marginLeft: "5%"}}>Курсы: читайте минималистичные, но подробные курсы на тему
                    безопасности в киберпространстве</li>
                  <li style={{marginLeft: "5%"}}>Тесты: проходите тесты, чтобы закрепить свои знания</li>
                  <li style={{marginLeft: "5%"}}>Рейтинг: соревнуйтесь с другими пользователями своими достижениями
                    в тестах</li>
                  <li style={{marginLeft: "5%"}}>Аналитика и отчеты: Следите за своим прогрессом с помощью статистики
                    и отчетов</li>
                  <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Начните свое обучение с
                    КиберШколой сегодня и сделайте большой шаг
                    к достижению своих образовательных и профессиональных целей!</Text>
                  <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Приложение предоставляется
                    на бесплатной основе и не преследует
                    цель монетизации трудов. Вся информация курсов и тестов взята с открытых источников и перенесена
                    в приложение с некоторыми изменениями.</Text>
                  <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "50px"}}>Если Вы нашли недочёт
                    или ошибку в курсе/тесте, то Вы всегда можете
                    сообщить об этом <a href="https://vk.com/cyberschool_app" target="_blank">нам</a>. Спасибо!</Text>
                </Group>
              </ModalPage>


              <ModalPage
                  id="congratulation"
                  onClose={closeModal}
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