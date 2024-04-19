import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import bridge from "@vkontakte/vk-bridge";
import {
    Panel,
    PanelHeader,
    Group,
    Avatar,
    Text,
    Separator,
    Placeholder,
    PanelHeaderButton, Div, Progress, Button, Link, Header
} from '@vkontakte/vkui';
import {Icon28EditOutline} from '@vkontakte/icons';

const ProfileTab = ({ id, showSnackbar, openModal}) => {
    const [user, setUser] = useState(null);
    const [rating, setRating] = useState(0);
    const [progress, setProgress] = useState(0);
    const [topUsers, setTopUsers] = useState([]);
    const [testsCount, setTestsCount] = useState(null);
    const [testsCountFetched, setTestsCountFetched] = useState(false);
    const totalTests = 5;
    const completionPercentage = testsCount ? (testsCount / totalTests) * 100 : 0;
    const [snackbar, setSnackbar] = useState(null);
    const [showServiceInfo, setShowServiceInfo] = useState(false);

    const handleServiceInfoToggle = () => {
        setShowServiceInfo(!showServiceInfo);
    };
    useEffect(() => {
        if (user && !testsCountFetched) {
            const fetchUserTestsCount = async () => {
                try {
                    const testsCountResponse = await axios.get(`https://htvk.ru:3000/api/user-tests-count?user_id=${user.id}`);
                    const testsCountData = testsCountResponse.data.tests_count;
                    setTestsCount(testsCountData);
                    setTestsCountFetched(true);
                } catch (error) {
                    console.error('Ошибка получения данных о количестве пройденных тестов');
                }
            };

            fetchUserTestsCount();
        }
    }, [user, testsCountFetched]);

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутить страницу вверх при рендеринге
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await bridge.send('VKWebAppGetUserInfo');
                setUser(userData);
            } catch (error) {
                console.error('Ошибка получения данных пользователя');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (user) {
            const fetchTopUsers = async () => {
                try {
                    const topUsersResponse = await axios.get('https://htvk.ru:3000/api/topusers');
                    const topUsersData = topUsersResponse.data;
                    const updatedTopUsers = await Promise.all(
                        topUsersData.map(async (user) => {
                            const userInfo = await bridge.send('VKWebAppGetUserInfo', { user_ids: String(user.user_id) });
                            return {
                                ...user,
                                first_name: userInfo.first_name,
                                last_name: userInfo.last_name,
                                avatar: userInfo.photo_100,
                                user_id: userInfo.id
                            };
                        })
                    );

                    setTopUsers(updatedTopUsers);
                    setRating(4.7);
                    setProgress(60);
                } catch (error) {
                    console.error('Ошибка получения данных топ пользователей');
                }
            };

            fetchTopUsers();
        }
    }, [user]);

    const handleCopyId = () => {
        showSnackbar('ID скопирован в буфер обмена');
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton><Icon28EditOutline /></PanelHeaderButton>}
            >
                Профиль
            </PanelHeader>
            <Group style={{ textAlign: 'center' }}>
                {user ? (
                    <Div>
                        <center><Avatar size={100} src={user.photo_200} /></center>
                        <Div>
                            <h2>{`${user.first_name} ${user.last_name}`}
                                <CopyToClipboard text={user.id} onCopy={handleCopyId}>
                                    <Text weight="regular" style={{ cursor: 'pointer', marginTop: '10px'}}><Button appearance="neutral">ID: {user.id}</Button></Text>
                                </CopyToClipboard></h2>
                        </Div>
                        <Div>
                            <Text weight="regular">Пройдено тестов: {testsCount || 0}/{totalTests}</Text>
                            <Progress value={completionPercentage} max="100" />
                            <Text>Прогресс: {Math.round(completionPercentage)}%</Text>
                        </Div>
                    </Div>
                ) : (
                    <Placeholder
                        icon={<Avatar size={72} />}
                        action={<PanelHeaderButton>Загрузить профиль</PanelHeaderButton>}
                    >
                        Здесь будет отображаться информация о профиле
                    </Placeholder>
                )}
            </Group>
            <Group style={{ textAlign: 'center' }}>
                <Header
                    mode="primary"
                    size="large"
                >Топ пользователей</Header>

                <div className="table-container">
                    <table style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                        <tr>
                            <th style={{ width: '3%', padding: '12px' }}>Место</th>
                            <th style={{ width: '40%', padding: '12px' }}>Пользователь</th>
                            <th style={{ width: '3%', padding: '12px' }}>Баллы</th>
                        </tr>
                        </thead>
                        <tbody>
                        {topUsers.map((user, index) => (
                            <tr key={user.id} style={{ marginBottom: '1px' }}>
                                <td style={{ padding: '12px' }}>{index + 1}</td>
                                <Div style={{ padding: '5px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar src={user.avatar} />
                                        <Link
                                            href={`https://vk.com/id${user.user_id}`}
                                            target="_blank"
                                        >
                                            <span style={{ marginLeft: '8px' }}>{`${user.first_name}`}</span>
                                        </Link>
                                    </div>
                                </Div>
                                <td style={{ padding: '12px' }}>{user.score}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <Header
                    indicator="Статистика обновляется раз в 10 минут"
                ></Header>
            </Group>


                <Group>
                    <Header>Авторы</Header>
                    <Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Div style={{ textAlign: 'center' }}>
                            <a href="https://vk.com/htmlrulit" target="_blank"> <Avatar size={64} src="https://sun9-80.userapi.com/s/v1/if2/f5n-k2s8JiVA1Klukcs_7jami__3nejUF6j1uqbumhnMXP9I4WSPFuSaLUq3iMnn1NSRURB4F0Mzo8-Pl-N_z-9y.jpg?quality=96&crop=150,150,599,599&as=50x50,100x100,200x200,400x400&ava=1&u=QLNFKWBdKld8IBCpNcVFav3mQKvNH41nwc3duot_aL4&cs=200x200" /></a>
                            Артем
                        </Div>
                        <Div style={{ textAlign: 'center' }}>
                            <a href="https://openai.com/" target="_blank"> <Avatar size={64} src="https://sun1-83.userapi.com/s/v1/ig2/rOUR3QxOOOVCd81E7UYHMQQ52we-UzRnkOrWc1Jh20MvACzEHJaWrXwGfCyXJsnu3g7LfX_cOt98t9Db6jCLLWXb.jpg?size=2155x2155&quality=95&crop=4,0,2155,2155&ava=1" /></a>
                            <Text>ChatGPT</Text>
                        </Div>
                    </Div>
                </Group>
            <Button
                mode="secondary"
                onClick={handleServiceInfoToggle}
            >
                О сервисе</Button>
            {showServiceInfo && (
                <Div>
                    <Text style={{marginLeft: "5%"}}>Присоединяйтесь к пользователям, которые уже улучшают свои
                        знания в киберпространстве! «КиберШкола» предлагает широкий спектр тестов по тематике безопасности
                        в Интернете, что позволяет Вам проверять и углублять знания в интересующих вас областях.</Text>
                    <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Возможности, которые
                        Вы полюбите:</Text>
                    <li style={{marginLeft: "5%"}}>Курсы: читайте минималистичные, но подробные курсы на тему
                        безопасности в киберпространстве;</li>
                    <li style={{marginLeft: "5%"}}>Тесты: проходите тесты, чтобы закрепить свои знания;</li>
                    <li style={{marginLeft: "5%"}}>Рейтинг: соревнуйтесь с другими пользователями своими достижениями
                        в тестах;</li>
                    <li style={{marginLeft: "5%"}}>Аналитика и отчеты: следите за своим прогрессом с помощью статистики
                        и отчетов.</li>
                    <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Начните свое обучение с
                        «КиберШколой» сегодня и сделайте большой шаг
                        к достижению своих образовательных и профессиональных целей!</Text>
                    <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "5px"}}>Приложение предоставляется
                        на бесплатной основе и не преследует
                        цель монетизации трудов. Вся информация курсов и тестов взята с открытых источников и перенесена
                        в приложение с некоторыми изменениями.</Text>
                    <Text style={{marginLeft: "5%", marginTop: "10px", marginBottom: "50px"}}>Если Вы нашли недочёт
                        или ошибку в курсе/тесте, то Вы всегда можете
                        сообщить об этом <a href="https://vk.com/cyberschool_app" target="_blank">нам</a>. Спасибо!</Text>
                </Div>
            )}
            {snackbar}
        </Panel>
    );
}

export default ProfileTab;
