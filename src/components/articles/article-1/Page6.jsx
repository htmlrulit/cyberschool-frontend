import React, {useState} from 'react';
import {Panel, PanelHeader, Button, Div, Text, Header, ButtonGroup, Card, Separator} from '@vkontakte/vkui';

const Page6 = ({ onNextPage }) => {
    const [selectedAttack, setSelectedAttack] = useState(null);
    const [attackDescription, setAttackDescription] = useState('');

    const handleAttackSelect = (attackType) => {
        setSelectedAttack(attackType);
        setAttackDescription(getAttackDescription(attackType));
    };

    const handleNext = () => {
        if (selectedAttack) {
            onNextPage(selectedAttack);
        } else {
            console.log("Выберите тип атаки!");
        }
    };

    const getAttackDescription = (attackType) => {
        switch (attackType) {
            case 'DDoS':
                return 'DDoS-атака – это атака, направленная на насыщение канала связи между пользователем и' +
                    'сервером. Она делает сервер недоступным для легитимных пользователей.';
            case 'Фишинг':
                return 'Фишинг – это метод мошенничества, в котором злоумышленник пытается получить' +
                    'чувствительную информацию, такую как логины, пароли или данные кредитных карт,' +
                    'путем выдачи себя за доверенное лицо.';
            case 'Вирусная атака':
                return 'Вирусная атака – это атака, при которой вредоносное программное обеспечение' +
                    'внедряется в устройство пользователя и наносит ущерб, например, украденные данные' +
                    'или повреждение системы.';
            default:
                return '';
        }
    };

    return (
        <Panel id="cyber-security-article-part6">
            <Card size="l" mode="shadow">
                <Div>
                <Header mode="secondary">Осознанность в интернете</Header>
                <Text>Осознанное использование интернета включает в себя понимание потенциальных угроз и
                    принятие мер предосторожности при взаимодействии в сети. Это помогает защитить вас и
                    вашу семью от различных киберугроз.</Text>
                </Div>
            </Card>
            <br/>
            <Separator></Separator><br/>

            <Card size="l" mode="shadow">
                <Div>
                <Header mode="secondary">Советы по осознанному использованию интернета</Header>
                <Text>Некоторые советы:</Text>
                <ul>
                    <li>Будьте осторожны при предоставлении личной информации в сети.</li>
                    <li>Не отвечайте на подозрительные электронные письма и не кликайте на подозрительные ссылки.</li>
                    <li>Обучайте себя и свою семью основам кибербезопасности.</li>
                    <li>Используйте средства защиты, такие как антивирусное программное обеспечение и
                        виртуальные частные сети (VPN).</li>
                </ul>
            </Div>
                </Card>
            <br/>
            <Separator></Separator>
            <br/>
            <Card size="l" mode="shadow">
                <Div>
            <Div>
                <ButtonGroup mode="horizontal" gap="m" stretched>
                <Button size="s" onClick={() => handleAttackSelect('DDoS')}>DDoS атака</Button>
                <Button size="s" onClick={() => handleAttackSelect('Фишинг')}>Фишинг</Button>
                <Button size="s" onClick={() => handleAttackSelect('Вирусная атака')}>Вирусная
                    атака</Button>
                </ButtonGroup>
            </Div>
                </Div>
            </Card>
            {selectedAttack && (
                <Div>
                    <Header mode="secondary">Описание атаки</Header>
                    <Text>{attackDescription}</Text>
                </Div>
            )}
        </Panel>
    );
};

export default Page6;
