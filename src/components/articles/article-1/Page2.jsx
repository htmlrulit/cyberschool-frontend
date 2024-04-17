import React, {useState} from 'react';
import {Panel, PanelHeader, Button, Div, Separator, Card, Header, Text, FormItem, Radio} from '@vkontakte/vkui';

    const Page2 = ({ onNextPage }) => {
        const [selectedOption, setSelectedOption] = useState('');
        const [gameResult, setGameResult] = useState('');

        const checkAnswer = () => {
            if (selectedOption === 'strong-password') {
                setGameResult('Правильно! Сильные пароли — важная часть интернет-безопасности.' +
                    'Из открытых источников пароли брать не стоит, а сохранять пароль в закладках - не лучшая идея.');
            } else {
                setGameResult('Неправильно. Попробуйте ещё раз!');
            }
        };
    return (
            <Panel id="cyber-security-article-continued">
                    <Header mode="secondary">Рекомендации по защите в интернете</Header>
                    <Card size="l" mode="shadow">
                        <Div>
                            <Text weight="regular">Не следует предоставлять конфиденциальные данные на ненадежных
                                сайтах и избегать использования общедоступных Wi-Fi сетей для осуществления
                                финансовых операций.</Text>
                            <Separator style={{ margin: '8px 0' }} />
                            <Text weight="regular">Важно также следить за актуальностью антивирусного программного
                                обеспечения на устройствах, использовать сильные пароли и не повторять их для
                                разных аккаунтов.</Text>
                            <Separator style={{ margin: '8px 0' }} />
                            <Text weight="regular">Обратите внимание на подозрительные сообщения или запросы,
                                а также не переходите по ссылкам из непроверенных источников.</Text>
                        </Div>
                    </Card>


                <Header mode="secondary">Выберите правильный совет</Header>
                <Card size="l" mode="shadow">

                        <FormItem>
                            <Radio
                                name="security-tip"
                                value="strong-password"
                                checked={selectedOption === 'strong-password'}
                                onChange={() => setSelectedOption('strong-password')}
                            >
                                Используйте сложные пароли и не повторяйте их для разных аккаунтов.
                            </Radio>
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="security-tip"
                                value="public-wifi"
                                checked={selectedOption === 'public-wifi'}
                                onChange={() => setSelectedOption('public-wifi')}
                            >
                                Придумайте самый сложный пароль в мире и сохраните его в закладках
                            </Radio>
                        </FormItem>
                        <FormItem>
                            <Radio
                                name="security-tip"
                                value="antivirus"
                                checked={selectedOption === 'antivirus'}
                                onChange={() => setSelectedOption('antivirus')}
                            >
                                Найдите в интернете очень сложный пароль и поставьте себе такой
                            </Radio>
                        </FormItem>
                        <Button style={{marginLeft: "10px"}} size="l" mode="primary" onClick={checkAnswer}>Проверить ответ</Button>
                        <br/><br/>
                        {gameResult && <Text>{gameResult}</Text>}

                </Card>
        </Panel>
    );
};


export default Page2;
