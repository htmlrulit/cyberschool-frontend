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
    PanelHeaderButton, Div, Progress, Button, ModalCardBase, Link
} from '@vkontakte/vkui';
import {Icon28EditOutline} from '@vkontakte/icons';

const ProfileTab = ({ id, showSnackbar}) => {
    const [user, setUser] = useState(null);
    const [rating, setRating] = useState(0);
    const [progress, setProgress] = useState(0);
    const [topUsers, setTopUsers] = useState([]);
    const [testsCount, setTestsCount] = useState(null);
    const [testsCountFetched, setTestsCountFetched] = useState(false);
    const totalTests = 4;
    const completionPercentage = testsCount ? (testsCount / totalTests) * 100 : 0;
    const [snackbar, setSnackbar] = useState(null);

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
                        <ModalCardBase
                            dismissButtonMode={null}
                        >

                        <Text weight="regular">Пройдено тестов: {testsCount ? `${testsCount}/${totalTests}` : 'загрузка...'}</Text>
                        <Progress value={completionPercentage} max="100" />
                        <Text>Прогресс: {Math.round(completionPercentage)}%</Text>
                        </ModalCardBase>
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
            <Separator style={{ margin: '12px 0' }} />
            <Group style={{ textAlign: 'center' }}>
                <Text weight="medium" style={{ fontSize: '24px', marginBottom: '16px' }}>Топ участников</Text>
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
                                        <span style={{ marginLeft: '8px' }}>{`${user.first_name} ${user.last_name}`}</span>
                                        </Link>
                                    </div>
                                </Div>
                                <td style={{ padding: '12px' }}>{user.score}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </Group>

            {snackbar}
        </Panel>
    );
}

export default ProfileTab;
