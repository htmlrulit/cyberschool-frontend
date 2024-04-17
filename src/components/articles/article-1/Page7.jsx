import React, { useState } from 'react';
import {Panel, PanelHeader, Div, Text, Alert, Header, Button, Card, Separator, ButtonGroup} from '@vkontakte/vkui';

const Page7 = ({ onNextPage }) => {
    const [bytes, setBytes] = useState(0);
    const [updates, setUpdates] = useState(0);
    const [popout, setPopout] = useState(null);

    const handleByteClick = () => {
        setBytes(bytes + 1);
    };

    const openAction = () => {
        setPopout(
            <Alert
                actions={[
                    {
                        title: 'Продолжить',
                        mode: 'destructive',
                    },
                ]}
                actionsAlign="left"
                actionsLayout="horizontal"
                onClose={closePopout}
                header="Не хватило интернета!"
                text="Вам не хватает трафика для обновления ПО. Продолжайте скачивать дальше."
            />
        );
    };

    const closePopout = () => {
        setPopout(null);
    };

    const handleUpdateClick = () => {
        if (bytes >= 10) {
            setUpdates(updates + 1);
            setBytes(bytes - 10);
        } else if (!popout) {
            openAction();
        }
    };

    const handleNextPage = () => {
        onNextPage();
    };

    return (
        <Panel id="cyber-security-article-part7">
            <Card size="l" mode="shadow">
                <Div>
                <Header mode="secondary">Значение обновлений</Header>
                <Text>Регулярное обновление программного обеспечения является важным аспектом кибербезопасности. Обновления включают исправления уязвимостей безопасности и новые функции, которые помогают защитить вас от киберугроз.</Text>
            </Div>
                </Card>
            <br/>
            <Separator></Separator>
            <br/>
            <Card size="l" mode="shadow">
                <Div>
            <Div>
                <Header mode="secondary">Советы по обновлению программного обеспечения</Header>
                <Text>Некоторые советы:</Text>
                <ul>
                    <li>Включите автоматические обновления для операционных систем и программного обеспечения.</li>
                    <li>Регулярно проверяйте наличие обновлений и устанавливайте их как можно скорее.</li>
                    <li>Используйте только лицензионное программное обеспечение.</li>
                    <li>Скачивайте программное обеспечение только с официальных и надежных источников.</li>
                </ul>
            </Div>
</Div>
                </Card>
            <br/>
            <Separator></Separator>
            <br/>
            <Card size="l" mode="shadow">
                <Div>
                    <Text>Кликайте на кнопку, чтобы скачать все 3 обновления</Text>
                    <br/>
                    <ButtonGroup mode="horizontal" gap="m" stretched>
                    <Button size="m" appearance="accent" stretched onClick={handleByteClick}>Скачать (Скачано: {bytes})</Button><br />
                    <Button size="m" appearance="accent" stretched onClick={handleUpdateClick}>Обновить ПО [{updates}/3]</Button>
                    </ButtonGroup>
                    {updates >= 3 && (
                        <Div>
                            <Text>Вы успешно обновили программное обеспечение 3 раза! Теперь вы готовы к следующему шагу.</Text>
                        </Div>
                    )}

                </Div>
            </Card>
            {popout}
        </Panel>
    );
};

export default Page7;
