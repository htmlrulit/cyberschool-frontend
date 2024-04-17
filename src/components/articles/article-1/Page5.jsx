import React, { useState } from 'react';
import {Panel, PanelHeader, Button, Div, Text, Header, ButtonGroup, Card, Separator} from '@vkontakte/vkui';

const Page5 = ({ onNextPage }) => {
    const [scenario, setScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const scenarios = [
        {
            text: 'Вы получили электронное письмо с подозрительной ссылкой. Что вы сделаете?',
            options: [
                { text: 'Открою', correct: false },
                { text: 'Удалю письмо', correct: true }
            ]
        },
        {
            text: 'Ваш друг просит вас предоставить свой пароль от аккаунта. Что вы сделаете?',
            options: [
                { text: 'Помогу', correct: false },
                { text: 'Откажусь', correct: true }
            ]
        },
        {
            text: 'Вы обнаружили подозрительную активность на своем банковском аккаунте. Что вы сделаете?',
            options: [
                { text: 'Бывает', correct: false },
                { text: 'Позвонить в банк', correct: true }
            ]
        }
    ];

    const handleOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (scenario === scenarios.length - 1) {
            setShowResults(true);
        } else {
            setScenario(scenario + 1);
        }
    };

    const renderGame = () => {
        return (
            <Div>
                <Header mode="secondary">Сценарий {scenario + 1}</Header>
                <Text>{scenarios[scenario].text}</Text>
                <br/>
                <ButtonGroup mode="horizontal" gap="m" stretched>
                    {scenarios[scenario].options.map((option, index) => (
                        <Button key={index} size="m" onClick={() => handleOptionClick(option.correct)}>
                            {option.text}
                        </Button>
                    ))}
                </ButtonGroup>
                <br/>
                <Text>Ваш счет: {score}</Text>
            </Div>
        );
    };

    const renderResults = () => {
        return (
            <Div>
                <Text>Вы набрали {score} из {scenarios.length} возможных баллов.</Text>
                <Text>Нельзя открывать незнакомые письма</Text>
                <Text>Нельзя передавать свои пароли никому. Возможно, Ваш друг так и сделал, теперь от его имени
                    Вам пишет злоумышленник.</Text>
                <Text>Если Вы заметили подозрительные действия с Вашим банковским счетом - обязательно обратитес
                    в поддержку.</Text>
            </Div>
        );
    };

    return (
        <Panel id="cyber-security-article-part5">
            <Card size="l" mode="shadow">
                <Div>
                <Header mode="secondary">Защита сети</Header>
                <Text>Сетевая безопасность играет важную роль в обеспечении безопасности в интернете. Она включает в
                    себя защиту домашней сети, Wi-Fi, маршрутизатора и других сетевых устройств от атак и
                    несанкционированного доступа.</Text>
            </Div>
                </Card><br/>
            <Separator></Separator>
            <br/>
            <Card size="l" mode="shadow">
                <Div>
                <Header mode="secondary">Рекомендации по сетевой безопасности</Header>
                <Text>Некоторые советы по обеспечению сетевой безопасности:</Text>
                <ul>
                    <li>Измените стандартные пароли для маршрутизатора и других сетевых устройств.</li>
                    <li>Включите шифрование Wi-Fi и используйте сильные пароли.</li>
                    <li>Регулярно обновляйте программное обеспечение сетевых устройств.</li>
                    <li>Используйте брандмауэр для защиты сети от внешних атак.</li>
                </ul>

            </Div>
                </Card>
       <br/>
    <Separator></Separator>
    <br/>
            <Card size="l" mode="shadow">
                <Div>
            {showResults ? renderResults() : renderGame()}
                    </Div>
            </Card>
        </Panel>
    );
};


export default Page5;
